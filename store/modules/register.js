import axios from "axios";
import Swal from "sweetalert2";

const login = {
  namespaced: true,
  state: {
    token: "",
    isAuth: false,
    name:""
  },
  mutations: {
    setToken(state, accessToken) {
      state.token = accessToken;
      state.isAuth = true;
    },
    setName(state, name) {
      state.name = name;
    },
  },
  actions: {
    async stroeToken({ commit }, { email, password }) {
      console.log(this.$axios.defaults.baseURL)
      try {
        const response = await axios.post(
          `${this.$axios.defaults.baseURL}/api/auth`,  //usage of base url
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
        console.log(response.data);
        commit("setToken", response.data);
      } 
      catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There is a problem, please try again",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    async registerUser({ commit }, { email, password, name }) {
      try {
        const response = await axios.post(
          `${this.$axios.defaults.baseURL}/api/users`,
          {
            email: email,
            password: password,
            name: name,
          }
        );
        Swal.fire({
          title: `Account created has been created successfully `,
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
        console.log(response.data);
        commit("setName", response.data);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There is a problem, please try again",
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
