import * as constants from './constants'
import { fromJS } from 'immutable'

// 初始默认的state
const defaultState = fromJS({
  myData: 99,
  msg: 66,
})

const getData = (state, action) => {
  return state.set('myData', action.data)
}

const reducer = (state = defaultState, action) => {
  /* 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
     解决方法是使用fromJS方法把原始的JS类型转化为immutable（不可变）类型。
  */
  switch (action.type) {
    case constants.SET_DATA:
      return getData(state, action)
    default:
      return state
  }
}

export default reducer
