import axios from "axios";
import { useAuthStore } from "./store/AuthStore";
import router from './router'
const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;
const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((config) => {
  if(!config.url.includes('signUp') || !config.url.includes('signInWithPassword') ){
    const authStore = useAuthStore();
    let params = new URLSearchParams();
    params.append('auth', authStore.UserInfo.token)
    config.params = params
  }
 
  return config
});
axiosInstance.interceptors.response.use(response =>{
  return response
}, async (err)=>{
  const authStore = useAuthStore();
  const originalRequest = err.config
  if(err.response.status === 401 && !originalRequest._retry){
    originalRequest._retry = true;
    try{
      const newTokens = await axios.post(
        `https://securetoken.googleapis.com/v1/token?key=${apiKey}`,{
          grand_type: 'refresh_token',
          refresh_token: JSON.parse(localStorage.getItem('userTokens').refreshToken)
        }
      )
      authStore.UserInfo.token = newTokens.data.access_token
      authStore.UserInfo.refreshToken = newTokens.data.refresh_token
      localStorage.setItem('userTokens', JSON.stringify({
        token: newTokens.data.access_token,
        refreshToken: newTokens.data.refresh_token,
      }))
    } catch(err){

     localStorage.removeItem('userTokens')
     router.push('/login')
     authStore.UserInfo.token = ''
     authStore.UserInfo.refreshToken = ''
    }
  }

})
export default axiosInstance