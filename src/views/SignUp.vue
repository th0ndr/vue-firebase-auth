<template>
    <div class="sign-up">
        <p>Lets create a new account!</p>
        <input type="text" v-model="email" placeholder="Email" /><br />
        <input
            type="password"
            v-model="password"
            placeholder="Password"
        /><br />
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login</router-link></span>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "signUp",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        signUp: function() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        console.log(user);
                        this.$router.replace("home");
                    },
                    err => {
                        alert("Ooops. " + err.message);
                    }
                );
        }
    }
};
</script>

<style></style>
