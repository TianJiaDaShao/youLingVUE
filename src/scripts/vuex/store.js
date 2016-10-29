const state = {
    tabIndex: 0,
    // myScroll : new IScroll('#zhangZiShi-scroll')
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
