import request from '../plugins/request'

export const getInstanceById = (data) => {
  return request({
    url: '/process/instance/getInstanceById',
    method: 'post',
    data,
  })
}
