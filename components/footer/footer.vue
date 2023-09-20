<template>
  <v-footer class="footer" color="blue-grey darken-4" padless>
    <v-row justify="center" align="center" no-gutters>
      <br />
    <v-col class="text-center" cols="12">  <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
        <nuxt-link class="underline-link" :to="link.path">{{ link.name }}</nuxt-link>
      </v-btn></v-col>

      <!-- Social Icons -->
      <v-col class="text-center bg-teal  w-100 px-4" style="background-color: #009688!important;" cols="12"><v-btn
        v-for="icon in icons"
        :key="icon"
        color="white"
        icon
        class="my-2"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn></v-col>

      <v-col class="blue-grey darken-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Crypto</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import BaseInput from "../elements/baseInput.vue";
export default {
  components: { BaseInput },
  data: () => ({
    links: [
      { name: "Home", path: "/" },
      { name: "Market", path: "/Market" },
      { name: "Blog", path: "/Blog" },
      { name: "About Us", path: "/About-Us" },
      { name: "Login", path: "/Login" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style scoped>
.underline-link {
  text-decoration: none;
}

.footer {
  position: absolute;
  bottom: -10rem;
  width: 100%;
}
</style>
