import Vue from 'vue'
import Vuex from 'vuex'
import MTTags from './mt-tags.js'

Vue.use(Vuex)

const state = {
  response: {},
  searchText: ''
}

const mutations = {
  set (state, nextState) {
    state.response = nextState.response
    state.searchText = nextState.searchText
  }
}

const actions = {
  searchMTTags ({ commit }, searchText) {
    MTTags.search(searchText, (response) => {
      const nextState = {
        response: response,
        searchText: searchText
      }
      commit('set', nextState)
    })
  }
}

const getters = {
  error: state => state.response.error !== undefined ? state.response.error : null,
  items: state => state.response.items !== undefined ? state.response.items : [],
  totalResults: state => state.response.totalResults !== undefined ? state.response.totalResults : 0
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
