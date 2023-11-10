import { defineStore } from "pinia";
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;
export const useAuthStore = defineStore ("AuthStore",()=>{
    
    const signup = async (payload) =>{
        try{
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,{
                ...payload,
                returnSecureToken:true
            })
            console.log(response)
        }
        catch(err){
            console.log(response)
        }
        
    }
    return {signup}
})
