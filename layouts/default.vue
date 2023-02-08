<template>
  <v-app dark>
    <v-app-bar color="cyan accent-3" fixed app>
      <v-btn color="white" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer /><v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
      <v-btn color="white" icon @click.stop="fixed = !fixed">
        <v-badge content="99+" color="error" overlap><v-icon>mdi-bell</v-icon></v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      width="200px"
      v-model="rightDrawer"
      right
      temporary
      absolute
    >
      <v-list>
        <v-list-item>
          <v-list-item-action> </v-list-item-action>
          <v-list-item-title class="nav-item">
            <nuxt-link to="wallet"> کیف پول </nuxt-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <the-footer />
  </v-app>
</template>

<script>
import theFooter from "../components/pageComponets/footer/theFooter.vue";
export default {
  components: { theFooter },
  name: "DefaultLayout",
  data() {
    return {
      rightDrawer: false,
      title: "Nikan-Test",
    };
  },
};
</script>
<style>
.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  padding: 20px;
}

.nav-item a:hover {
  transition: 0.8s;
  background-color: #4461f2;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  border-radius: 20px;
}
</style>
