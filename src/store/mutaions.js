/**
 * Created by Administrator on 2017/9/19 0019.
 */

export default {
  add (state) {
    if (state.add !== '' || state.add === 0) {
      state.add++
    } else {
      alert('错误')
    }
  }
}
