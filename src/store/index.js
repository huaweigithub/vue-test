import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    goodlist: []
}

const mutations = {
    _getgoods(state, payload) {
        state.goodlist = payload
    }
}

export default new Vuex.Store({
    state,
    mutations
})