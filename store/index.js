import Vuex from 'vuex'
import register from './modules/register'
import post from './modules/post'
import loginAdmin from './modules/loginAdmin'

const createStore = () => {
    return new Vuex.Store({
        state: {
        },
        mutations: {
        },
        actions: {
        },
        getters: {
        },
        modules: {
            register, post,loginAdmin
        }

    })
}
export default createStore;