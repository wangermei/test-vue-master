/**
 * Created by Administrator on 2017/9/19 0019.
 */

export default {
  async reduce ({ commit, state }) {
    try {
      if (state.count !== '' && state.count !== 0) {
        console.log(state.count)
        state.count--
      } else {
        alert('count的初始值大于20或者小于20')
      }
    } catch (err) {
      throw new Error('count的初始值大于20或者小于20')
    }
  }
}

