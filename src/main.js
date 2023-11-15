import App from './App.vue'
import router from './router'

import './style.css'
import './api.js'
import { createApp } from 'vue'

import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAPInAtXFhBFN3BJBH_aZk7PplyQRXXtH8",
  authDomain: "testauth-2ea5c.firebaseapp.com",
  projectId: "testauth-2ea5c",
  storageBucket: "testauth-2ea5c.appspot.com",
  messagingSenderId: "897395675215",
  appId: "1:897395675215:web:348178abd02ca017945a3a"
};

initializeApp(firebaseConfig);


  const app = createApp(App)
  const pinia = createPinia()
  app.use(router)
  app.use(pinia)
  app.mount('#app')


