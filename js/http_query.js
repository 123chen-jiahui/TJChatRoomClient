// axios.interceptors.request.use(
//   config =>{
//     let token = localStorage.getItem('token')
//     if(token){
//         //这里面获取的请求头的键(tokenHeader)根据每个后端的习惯封装的名称各不相同  
//       config.headers.common['Authorization'] = `bearer ${token}`
//     }
//     return config
//   }, error =>{
//     return Promise.reject(error)
//   }
// )

// function get(url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {
//         params: params
//       })
//       .then(res => {
//         resolve(res.data)
//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }