import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.VUE_APP_FB_KEY,
    authDomain: process.env.VUE_APP_FB_DOMAIN,
    databaseURL: process.env.VUE_APP_DB_URL,
    projectId: process.env.VUE_APP_PROJECT,
    storageBucket: process.env.VUE_APP_STORAGE,
    messagingSenderId: process.env.VUE_APP_MESSAGING,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
    new Vue({
        router,
        render: h => h(App)
    }).$mount("#app");
});
