import { SET_DATA } from './constants'

export const getData = (data) => ({
  type: SET_DATA,
  data,
})

export const setData = (data) => ({
  type: SET_DATA,
  data,
})
