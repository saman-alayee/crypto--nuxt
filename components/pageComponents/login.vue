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
          <v-text-field v-model="email" label="E-mail" prepend-inner-icon="mdi-email-outline" required class="mt-8"></v-text-field>
          <v-text-field v-model="password" type="password" prepend-inner-icon="mdi-lock-outline" label="password" required></v-text-field>


          <v-btn class="mt-5" min-width="100%" color="blue darken-4" dark @click="loginUser">
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
    name: "",
    password: "",
    user_id: "",
    nameRules: [
      (v) => !!v || "password is required",
      (v) => (v && v.length <= 6) || "Name must be less than 6 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    loginUser() {
      this.$store.dispatch("register/stroeToken", {
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
  width: 1200px;
  height: 35rem;
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

@media only screen and (max-width: 1100px) {
  .card-conatiner {
    width: 95vw;
  }
}
</style>