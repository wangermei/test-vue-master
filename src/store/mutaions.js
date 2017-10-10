/**
 * Created by Administrator on 2017/9/19 0019.
 */

export default {
  // UPDATE_ADD: (state, add) => {
  //   state.add = add
  // }
  add (state) {
    if (state.add !== '' || state.add === 0) {
      console.log(state.add)
      state.add++
    } else {
      alert('错误')
    }
  },
  roomNum (state, roomNo) {
    state.test = roomNo
  },
  nav (state, navInfo) {
    state.navInfo = navInfo
  }
}
