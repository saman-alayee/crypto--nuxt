<template>
  <v-container>
    <div class="card-conatiner bottom">
      <div class="img-container">
        <img src="@/assets/images/vectors/signupImage.jpg" alt="image" />
      </div>
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
          <v-text-field v-model="name" :rules="nameRules" label="name" required class="mt-8"></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required class="mt-8"></v-text-field>
          <v-text-field v-model="password" type="password"  :rules="passwordRules" label="password" required></v-text-field>
          <v-text-field v-model="re_password" type="password" :rules="passwordRules" label="re_password" required></v-text-field>

          <v-btn class="mt-5" min-width="100%" color="blue darken-4" dark @click="signupUser">
            sign up
          </v-btn>
          <v-spacer></v-spacer>
          <div class="app-color-blue text-center mt-5">
            <nuxt-link class="white--text mt-4" to="/login">go to login page </nuxt-link>
          </div>
        </v-form>
      </div>

    </div>
  </v-container>
</template>
<script>

export default {
  data: () => ({
    valid: true,
    password: "",
    name: "",
    passwordRules: [
      (v) => !!v || "password is required",
      (v) => (v && v.length <= 6) || "Name must be less than 6 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    nameRules: [
      (v) => !!v || "name is required",
    ]
  }),


  methods: {
    signupUser() {
      this.$store.dispatch("register/registerUser", {
          email: this.email,
          password: this.password,
          name:this.name
        });
    }
  },
};

</script>
<style scoped>
.img-container {
  display: flex;
  justify-content: start;
}

.img-container img {
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.card-conatiner {
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 40rem;
  background-color: #625a0f;
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