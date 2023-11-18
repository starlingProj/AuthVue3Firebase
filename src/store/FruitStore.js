import { defineStore } from "pinia";
import axiosInstance from "../api";
import { ref } from "vue";
export const useFruitStore = defineStore("FruitStore", () => {
  const fruits = ref();
  const getFruits = async () => {
    try {
      const responce = await axiosInstance.get(
        `https://testauth-2ea5c-default-rtdb.europe-west1.firebasedatabase.app/info.json`
      );
      fruits.value = responce.data;
    } catch (err) {
      throw err.responce;
    }
  };
  return {fruits, getFruits}
});
