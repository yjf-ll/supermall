// 导入axios模块
import axios from 'axios'


// // 导出封装的请求网络函数   ----方式一
// export function request (config, success, failure) {

//   // 定义一个axios模块
//   const instance = axios.create({
//     // 设置默认baseUrl
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     // 设置响应时间为5s内
//     timeout: 5000
//   })

//   instance(config)
//     .then((res) => {
//       // console.log(res);
//       success(res)
//     })
//     .catch((err) => {
//       // console.log(err);
//       failure(err)
//     })
// }

// // 导出封装的请求网络函数   ----方式二
// export function request (config) {

//   // 定义一个axios模块
//   const instance = axios.create({
//     // 设置默认baseUrl
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     // 设置响应时间为5s内
//     timeout: 5000
//   })

//   instance(config.url)
//     .then((res) => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch((err) => {
//       // console.log(err);
//       config.failure(err)
//     })
// }


// // 导出封装的请求网络函数   ----方式三
// export function request (config) {

//   return new Promise((resolve, reject) => {
//       // 定义一个axios模块
//     const instance = axios.create({
//       // 设置默认baseUrl
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       // 设置响应时间为5s内
//       timeout: 5000
//     })

//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })

// }


// 导出封装的请求网络函数   ----方式四----------------终极方案
export function request (config) {


      // 定义一个axios模块
    const instance = axios.create({
      // 设置默认baseUrl
      baseURL: 'http://152.136.185.210:7878/api/m5',
      // 设置响应时间为5s内
      timeout: 5000
    })


    // axios 请求拦截器  1.需要改数据时  2.添加请求数据动画时  3.用户点击需要带token的链接时，做一些处理
    instance.interceptors.request.use(config => {
      console.log('拦截成功');
      return config
    }, err => {
      console.log('拦截失败');
      return err
    })

    instance.interceptors.response.use(config => {
      console.log('响应成功');
      return config.data
    }, err => {
      console.log('响应失败');
      return err
    })

    // 返回axios请求 本质是一个Promise对象
    return instance(config)

}