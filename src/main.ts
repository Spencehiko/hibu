import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyComXuNMIJRXpTBoo36NAMX3hR2mjHHLXY",
  authDomain: "taboo-8d3ca.firebaseapp.com",
  projectId: "taboo-8d3ca",
  storageBucket: "taboo-8d3ca.appspot.com",
  messagingSenderId: "452300683880",
  appId: "1:452300683880:web:f091a6fc361e08a798d9dd",
  measurementId: "G-RTBN8G0NDE",
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app2);
