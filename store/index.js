import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedCards: [],
            loadedPrice:0
        },
        mutations: {
            setCards(state, cards) {
                state.loadedCards = cards
            },
            setPrice(state,price) {
                state.loadedPrice = price
            }
        },
        actions: {
            setCards(vuexContext) {
                vuexContext.commit('setCards', cards)
            },
            setPrice(vuexContext) {
                vuexContext.commit('setPrice', price)
            }
        },
        getters: {
            loadedCards(state) {
                return state.loadedCards
            },
            loadedprice(state) {
                return state.loadedPrice
            }
        }
    })
}
export default createStore