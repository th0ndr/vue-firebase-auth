<template>
    <div class="login">
        <h3>
            <input type="text" v-model="email" placeholder="Email" /><br />
            <input
                type="password"
                v-model="password"
                placeholder="Password"
            /><br />
            <button @click="login">Connection</button>
            <p>
                You can create an account
                <router-link to="/sign-up">here </router-link>
            </p>
        </h3>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        login: function() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        console.log(user);
                        this.$router.replace("home");
                    },
                    err => {
                        alert("Something went wrong " + err.message);
                    }
                );
        }
    }
};
</script>

<style scoped>
.login {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>
