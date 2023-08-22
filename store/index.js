import Vuex from 'vuex'
import register from './modules/register'
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
            register, post
        }

    })
}
export default createStore;