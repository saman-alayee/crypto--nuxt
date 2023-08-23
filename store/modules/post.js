import axios from 'axios'

const post = {
    namespaced:true,
    state: {
        posts: []
    },
    getters: {
        loadedPosts(state) {
            return state.posts
        }
    },
    mutations: {
        setPosts(state, myPosts) {
            state.posts = myPosts
        }
    },
    actions: {
        
        async getPosts({ commit }) {
            try {
                const response = await axios.get(`${this.$axios.defaults.baseURL}/api/products`, {
                })
                console.log(response.data)
                commit('setPosts', response.data)
            } catch (error) {
                console.log(error)

            }
        },
        

    },

}
export default post