import Vuex from 'vuex'
import register from './modules/register'
import post from './modules/post'
import loginAdmin from './modules/loginAdmin'
import market from './modules/market'

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
            register, post,loginAdmin,market
        }

    })
}
export default createStore;