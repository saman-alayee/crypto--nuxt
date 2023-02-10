import axios from 'axios'
import Swal from 'sweetalert2'


const login = {
    namespaced: true,
    state: {
        token: "",
        isAuth: false,
    },
    mutations: {
        setToken(state, accessToken) {
            state.token = accessToken
        },

    },
    actions: {
        async stroeToken({ commit }, { email, password }) {
            try {
                const response = await axios.post('https://reqres.in/api/register/', {
                    email: email,
                    password: password
                })
                Swal.fire({
                    title: "welcome",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });
                console.log(response.data)
                commit('setToken', response.data.token)
                console.log(state)

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
}
export default login;