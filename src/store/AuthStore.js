import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;
export const useAuthStore = defineStore("AuthStore", () => {
  const UserInfo = ref({
    token: "",
    email: "",
    userId: "",
    refreshToken: "",
    expiresIn: "",
  });

  const error = ref("");
  const auth = async (payload, type) => {
    error.value = "";
    const stringUrl = type === "signup" ? "signUp" : "signInWithPassword";
    try {
      let response = await axios.post(
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
        expiresIn: response.data.expiresIn,
      };
      localStorage.setItem(
        "userTokens",
        JSON.stringify({
          token: UserInfo.value.token,
          refreshToken: UserInfo.value.refreshToken,
          expiresIn: UserInfo.value.expiresIn,
        })
      );
    } catch (err) {
      console.log(err);
      switch (err.response.data.error.message) {
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
      UserInfo.value.expiresIn = tokens.expiresIn;
    }
  });
  const logoutUser = () => {
    localStorage.removeItem("userTokens");
    UserInfo.value = {};
  };
  return { auth, UserInfo, error, getTokens, logoutUser };
});
