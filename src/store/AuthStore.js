import { defineStore } from "pinia";

import { ref, computed } from "vue";
import axiosInstance from "@/api.js";

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;
export const useAuthStore = defineStore("AuthStore", () => {
  const UserInfo = ref({
    token: "",
    email: "",
    userId: "",
    refreshToken: "",
  });

  const error = ref("");
  const auth = async (payload, type) => {
    error.value = "";
    const stringUrl = type === "signup" ? "signUp" : "signInWithPassword";
    try {
      let response = await axiosInstance.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        }
      );

      UserInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
      };
      localStorage.setItem(
        "userTokens",
        JSON.stringify({
          token: UserInfo.value.token,
          refreshToken: UserInfo.value.refreshToken,
        })
      );
    } catch (err) {
      console.log(err);      switch (err.response.data.error.message) {
        case "EMAIL_EXISTS":
          error.value = "EMAIL ВЖЕ ІСНУЄ";
          break;
        case "OPERATION_NOT_ALLOWED":
          error.value = "НЕМАЄ ДОСТУПУ ДО ОПЕРАЦІЇ";
          break;
        case "INVALID_LOGIN_CREDENTIALS":
          error.value = "Неправильні дані(логін або пароль)";
          break;
        default:
          error.value = "Error";
          break;
      }
      throw error.value;
    }
  };
  const getTokens = computed(() => {
    const tokens = JSON.parse(localStorage.getItem("userTokens"));
    if (tokens) {
      UserInfo.value.token = tokens.token;
      UserInfo.value.refreshToken = tokens.refreshToken;
    }
  });
  const logoutUser = () => {
    localStorage.removeItem("userTokens");
    UserInfo.value = {};
  };
  return { auth, UserInfo, error, getTokens, logoutUser };
});
