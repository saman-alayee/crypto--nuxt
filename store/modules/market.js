import axios from "axios";
import Swal from "sweetalert2";

const coin = {
  namespaced: true,
  state: {
    coins: [],
  },
  getters: {
    loadedCoins(state) {
      return state.coins;
    },
  },
  mutations: {
    setCoins(state, myCoins) {
      state.coins = myCoins; // Note the corrected capitalization of 'state.coins'
    },
  },
  actions: {
    async getCoins({ commit }) {
      try {
        // Define your API key for CoinMarketCap
        const apiKey = "28d188d3-a39f-472c-862c-08ff71905663";
        const headers = {
          "X-CMC_PRO_API_KEY": apiKey,
        };

        const response = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges",
          {} // Pass the headers as an option
        );
        console.log((response.data));
        commit("setCoins", response.data); // Use response.data.data to get the actual coin data
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
};

export default coin;
