import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const login = {
  namespaced: true,
  state: {
    token: "",
    email: "",
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
    async storeToken({ commit }, { email, password }) {
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
        commit("setToken", response.data.token);
        
        Cookies.set("Token", response.data.token);
        Cookies.set("Email", response.data.email);
        Cookies.set("Name", response.data.username);
        // this.$router.push({ path: "profile" });

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
        this.$router.push({ path: "login" });
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
    async editUser({ commit }, { formData }) {
      try {
        const response = await axios.patch(
          `${this.$axios.defaults.baseURL}/api/users`,
          {
           formData
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
