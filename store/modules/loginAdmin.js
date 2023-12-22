import axios from "axios";
import Swal from "sweetalert2";

const login = {
  namespaced: true,
  state: {
    adminToken: "",
    isAuthAdmin: false,
  },
  mutations: {
    setToken(state, accessToken) {
      state.adminToken = accessToken;
      state.isAuthAdmin = true;
    },
  },
  actions: {
    async storeToken({ commit }, { email, password }) {
      try {
        const response = await axios.post(
          `${this.$axios.defaults.baseURL}/api/auth`, // usage of base url
          {
            email: email,
            password: password,
          }
        );
        
        Swal.fire({
          title: `welcome ${email}`,
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
        this.$router.push({ path: "admin" });
        localStorage.setItem('adminToken',response.data)

        console.log(response.data);
        commit("setToken", response.data);
      } catch (error) {
        console.log(error.response.data)
        Swal.fire({
          title: "Error!",
          text: error.response.data,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
  },
  // getters: {
  //     loadedToken(state) {
  //         return state.token
  //     },

  // }
};
export default login;
