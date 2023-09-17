import axios from "axios";
import Swal from "sweetalert2";

const post = {
  namespaced: true,
  state: {
    posts: [],
    post: null,
  },
  getters: {
    loadedPosts(state) {
      return state.posts;
    },
    currentPost(state) {
      return state.post;
    },
  },
  mutations: {
    setPosts(state, myPosts) {
      state.posts = myPosts;
    },
    setSinglePost(state, singlePost) {
      state.post = singlePost;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/api/products`
        );
        commit("setPosts", response.data); // Use response.data to get the actual data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There is a problem, please try again",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    async singlePost({ commit }, postId) {
      console.log(postId.postId)
      try {
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/api/products/` + postId.postId
        );
        commit("setSinglePost", response.data); // Use response.data to get the actual data
        console.log(response)
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There is a problem, please try again",
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log(error)
      }
    },
  },
};

export default post;
