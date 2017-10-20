import axios from 'axios'
export const reduce = async ({commit, state}) => {
  try {
    if (state.count !== '' && state.count !== 0) {
      console.log(state.count)
      state.count--
      let roomNo = '你好,world!'
      commit('roomNum', roomNo)
    } else {
      alert('count的初始值大于20或者小于20')
    }
  } catch (err) {
    throw new Error('count的初始值大于20或者小于20')
  }
}

export const getNavData = async ({ commit }) => {
  axios.get('http://localhost:8080/static/data.json').then(response => {
    // let resultData = JSON.stringify(response.data)
    // console.log(resultData)

    if (response.data.status === '0') {
      console.log(response.data.result)
      commit('UPDATE_NAV_INFO', response.data.result)
    } else {
      throw new Error('请求失败')
    }
  })
}

// export const add = async ({ commit, state }) => {
//   if (state.add !== '' || state.add === 0) {
//     // console.log(state.add)
//     let rusult = state.add++
//     console.log(state.add)
//   } else {
//     alert('错误')
//   }
// }

