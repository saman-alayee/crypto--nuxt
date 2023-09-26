<template>
  <v-container>
    <div class="card-conatiner bottom">
      <div class="form-container">
        <div class="text-field">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nemo
            facere similique placeat atque dicta consectetur, laborum suscipit
            quo in!
          </p>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" prepend-inner-icon="mdi-email-outline"
            required class="space-form">
            <v-messages :value="emailErrors"></v-messages>
          </v-text-field>
          <v-text-field v-model="password" :rules="passwordRules" class="space-form" type="password"
            prepend-inner-icon="mdi-lock-outline" label="password"  required>
            <v-messages :value="passwordErrors"></v-messages>
          </v-text-field>

          <v-btn class="space-form" min-width="100%" color="blue darken-4" dark @click="loginUser">
            Login
          </v-btn>
          <v-spacer></v-spacer>
          <div class="app-color-blue text-center mt-5">
            <nuxt-link class="white--text mt-4" to="/signup">Dont have account ?</nuxt-link>
          </div>
        </v-form>
      </div>
      <div class="img-container">
        <img src="@/assets/images/vectors/loginImage.jpg" alt="image" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",
    emailErrors: [],
    passwordErrors: [],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length > 6) || "Password must be less than 6 characters",
    ],
  }),
  methods: {
    loginUser() {
      this.$store.dispatch("register/storeToken", {
        email: this.email,
        password: this.password,
      });
    }
  },
};
</script>
<style scoped>
.img-container {
  display: flex;
  justify-content: end;
}

.img-container img {
  width: 90%;
  object-fit: cover;
  border-radius: 20px;
}

.card-conatiner {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45rem;
  background-color: #18162c;
  border-radius: 16px;
  margin-bottom: 7rem;
}

.form-container {
  justify-content: end;
  align-items: flex-end;
  padding: 32px;
}

.bottom {
  margin-bottom: 20rem;
}

.space-form {
  margin-top: 4rem;
}

@media only screen and (max-width: 1100px) {
  .card-conatiner {
    width: 95vw;
  }
}
</style>