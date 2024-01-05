<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">CRYPTO</nuxt-link>
      </div>
      <div v-if="userName" class="profile d-flex mt-2">
        <div class="avatar ">
          <img src="@/assets/images/vectors/user.png" width="36px" alt="">
        </div>
        <div class="name mt-1">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark v-bind="attrs" v-on="on">
                {{ userName }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" @click="redirect(item.route)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>

              </v-list-item>
              
              <v-list-item>
                <v-list-item-title class="logout" @click="logout">logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/Products">Products</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/market">Market</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/quiz">Quiz</nuxt-link></li>

          <li class="nav-item login-btn"><nuxt-link to="/Login">Login</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";
import Cookies from "js-cookie";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  data: () => ({
    items: [
      { title: 'profile', route: '/profile' },
      { title: 'cart', route: '/cart' },
    ],
  }),
  computed: {
    userName() {
      return Cookies.get("Name") || ""; // Get email from cookie
    },
  },
  methods: {
    redirect(route) {
      this.$router.push({ path: route });
    },
    logout() {
      Cookies.remove("Token");
      Cookies.remove("Email");
      Cookies.remove("Name");
      window.location.reload();
    },


  },
};

</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.nav-item a {
  font-size: 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.login-btn {
  border-radius: 4px;

}

.navigation-items {
  display: none;
}

.avatar {
  padding: 4px;
}
.logout {
  cursor: pointer;
}
@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 44px;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
  padding: 8px;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  border: 1px solid #dd2c00;
  background-color: #dd2c00;
  border-radius: 8px;
}
</style>
