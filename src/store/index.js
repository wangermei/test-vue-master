/**
 * Created by Administrator on 2017/9/19 0019.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions/index'
import mutations from './mutaions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

