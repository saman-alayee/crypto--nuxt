<template>
  <v-app dark>
    
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <v-container><Nuxt />
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import Footer from '../components/footer/footer.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    Footer
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>
<style scoped>
html {
  font-size: 30px;
}
body {
  margin: 0;
  font-size: 30px;
  background-color: #1b2431;
}
</style>
