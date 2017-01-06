import Vue from 'vue'

const httpAjax = (params) => {
  Vue.http({
    method: params || params.method,
    url: params.url,
    data: params.data
  }).then((data) => {
    if(params.success) params.success(data)
  }, (e) => {
    if(params.error) params.error(e)
  })
}


export default {
  httpAjax: httpAjax
}
