<template>
  <v-app dark>
    <div class="layout-container">
      <div class="sidebar-component" v-if="shouldShowSidebar">
        <Sidebar />
      </div>
      <div class="main-layout-component" v-if="shouldShowHeader">
        <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
        <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
      </div>
      <v-container>
        <div class="main"></div>
        <Nuxt />
      </v-container>
      <Footer v-if="shouldShowFooter" />
    </div>
  </v-app>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import Footer from '../components/footer/footer.vue';
import Sidebar from "../components/sidebar/sidebar.vue";

export default {
  components: {
    TheHeader,
    TheSidenav,
    Footer,
    Sidebar
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    shouldShowSidebar() {
      // Define an array of page names where you want to show the sidebar
      const pagesWithSidebar = ['cart','profile']; // Replace with actual page names
      console.log(this.$route.name)
      return pagesWithSidebar.includes(this.$route.name);

    },
    shouldShowHeader() {
      // Define an array of page names where you want to show the sidebar
      const pagesWithSidebar = ['index', 'login', 'market', 'admin', 'about', 'products', 'signup', 'login_admin','products-id','quiz']; // Replace with actual page names
      console.log(this.$route.name)
      return pagesWithSidebar.includes(this.$route.name);

    },
    shouldShowFooter() {
      // Define an array of page names where you want to show the sidebar
      const pagesWithSidebar = ['index', 'login', 'market', 'admin', 'about', 'products', 'signup', 'login_admin','products-id','quiz']; // Replace with actual page names
      console.log(this.$route.name)
      return pagesWithSidebar.includes(this.$route.name);

    },
  },
};
</script>
<style lang="scss" scoped>
html {
  font-size: 30px;
}

body {
  margin: 0;
  font-size: 30px;
  background-color: #1b2431;
}
.main {
  margin-bottom: 5rem;
}
.sidebar-component {
  height: 100vh;
  width: 20%;
}

.main-layout-component {
  overflow-x: hidden;
  height: 100vh;

  .content {
    height: 100%;
    margin-top: 24px;
  }
}

.left-side-bar {
  width: 440px;
  background: rgba(166, 166, 166, 0.1);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 0px 30px 30px 0px;
  padding: 0 10px;

  .left-bar-header {
    width: 350px;
    direction: ltr;
    display: flex;
    flex-direction: row;

    .icon-card {
      width: 45px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      background: #fff;
      margin: 10px 6px;
    }

    .switch-box {
      display: flex;
      flex-direction: row;
      margin: 22px 8px;

      .test {
        padding: 0px 6px;
      }
    }
  }
}

.layout-container {
  display: flex;
  .left-container {
    width: 100%;
  }

  .topbar {
    width: 100%;

    .title-container-top {
      width: 100%;
      height: 64px;
      background: #c4c4c4f5;
      display: flex;
      align-items: center;
      padding: 10px 20px;

      // position: fixed;
      // top: 110px;
      // left: 0;
      // z-index: 20000;
      p {
        color: #404141;
        text-align: right;
        margin-bottom: 0;
      }
    }
  }
}
</style>
