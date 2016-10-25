const state = {
    tabIndex: 0
}

const mutations = {
    CHANGEINDEX(state,curIndex){
      state.tabIndex = curIndex;
    }
}

export default new Vuex.Store({
  state,
  mutations
})
