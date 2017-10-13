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
  UPDATE_NAV_INFO: (state, Info) => {
    const data = {
      productId: Info.productId,
      productName: Info.productName,
      prodcutPrice: Info.prodcutPrice,
      prodcutImg: Info.prodcutImg
    }
    state.navInfo = data
  }
}
