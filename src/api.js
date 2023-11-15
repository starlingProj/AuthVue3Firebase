import axios from "axios";
import { useAuthStore } from "./store/AuthStore";

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  let params = new URLSearchParams();
  params.append('auth', authStore.UserInfo.token)
  config.params = params
  return config
});
