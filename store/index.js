import Vuex from 'vuex'
import login from './modules/login'
import post from './modules/post'

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
            login, post
        }

    })
}
export default createStore