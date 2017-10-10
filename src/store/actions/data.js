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

export const getNavData = async (commit, state) => {
  axios.get('http://localhost:8080/static/data.json').then(response => {
    const data = JSON.stringify(response.data)
    console.log(data)

    if (data.status === '0') {
      commit('nav', data.result)
    }
    return data
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

