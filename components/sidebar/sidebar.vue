<template>
    <div class="sidebar-component-container " :class="{ openSidebar: isOpen }">
      <div class="close-container" @click="isOpen = !isOpen" :class="{ rotate: isOpen }">
  
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
  
      </div>
  
      <div class="menu-item-container ">
  
        <div class="menu-item" @click="goRfp">
          <div class="icon-container mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-file-earmark-check" viewBox="0 0 16 16">
              <path
                d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
              <path
                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
          </div>
          <div class="menu-title px-2" v-if="isOpen">RFP</div>
        </div>
  
        <div class="menu-item" @click="goRequest">
          <div class="icon-container mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add"
              viewBox="0 0 16 16">
              <path
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path
                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
            </svg>
          </div>
          <div class="menu-title px-2" v-if="isOpen">Requests</div>
        </div>
        <div class="menu-item" @click="goTickets">
          <div class="icon-container mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat"
              viewBox="0 0 16 16">
              <path
                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
          </div>
          <div class="menu-title px-2" v-if="isOpen">Tickets</div>
        </div>
        <div class="menu-item" @click="logOut">
          <div class="icon-container mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
              <path fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
            </svg>
          </div>
          <div class="menu-title px-2" v-if="isOpen">Logout</div>
        </div>
  
  
      </div>
      <!-- <div class="logo-botton" v-if="isOpen">
        <img src="@/assets/images/menu.png" width="20" alt="" />
      </div>
      <div class="logo-botton" v-if="!isOpen">
        <img src="@/assets/images/menu.png" width="20" alt="" />
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    components: {},
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      openMenu() {
        this.isOpen = !this.isOpen;
      },
      goRequest() {
        return this.$router.push('/admin/requests');
      },
      goTickets() {
        return this.$router.push('/admin/tickets');
      },
      goRfp() {
        return this.$router.push('/admin');
      },
      logOut() {
        localStorage.removeItem('adminToken');
        return this.$router.push('/login_admin');
  
      }
  
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .sidebar-component-container {
    width: 72px;
    height: 100%;
    background-color: #2a2d3e;
    border-radius: 0px 20px 20px 0px;
    transition: all 0.3s;
    padding: 24px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    box-shadow: #a5a5a5;
  
    .user-profile-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
  
      .img-container {
        width: 32px;
        height: 32px;
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  
    .menu-item-container {
      width: 120%;
      margin-top: 3rem;
  
      .menu-item {
        width: 100%;
        height: 32px;
        color: #ffffff;
        border-radius: 1px;
        transition: all 0.3s;
        cursor: pointer;
        margin-bottom: 16px;
        display: flex;
        justify-content: start;
        align-items: start;
  
        &:hover {
          transition: 0.5s;
          background-color: #ffffff;
          color: #4c00ff;
          display: flex;
          border-radius: 4px;
          justify-content: center;
        }
  
        .menu-title {
          margin-right: 16px;
          margin-top: 4px;
        }
      }
    }
  
    .logo-botton {
      height: 100px;
      width: 100%;
    }
  
    .close-container {
      position: absolute;
      top: 30px;
      left: 10px;
      transform: rotate(180deg);
      cursor: pointer;
      color: #ffffff;
      width: 30px;
    }
  
    .rotate {
      transform: rotate(0);
    }
  }
  
  .openSidebar {
    width: 260px;
    padding: 48px;
  }</style>