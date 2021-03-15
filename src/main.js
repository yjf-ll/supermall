import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import store from './store'

import {request} from './networks/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})

// // 请求方式一
// request({
//     url: '/home/multidata'
//   }, res => {
//     console.log('success');
//     console.log(res);
//   }, err => {
//     console.log('error');
//     console.log(err);
//   }
// )

// // 请求方式二
// request({
//   url: {
//     url: '/home/multidata'
//   },
//   success: (res) => {
//     console.log('success');
//     console.log(res);
//   },
//   failure: (err) => {
//     console.log('err');
//     console.log(err);
//   }
// })


// // 请求方式三
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log('success');
//   console.log(res);
// }).catch(err => {
//   console.log('err');
//   console.log(err);
// })



// 请求方式四---------------终极方案
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log('success');
//   console.log(res);
// }).catch(err => {
//   console.log('err');
//   console.log(err);
// })




// axios({
//   url: 'http://152.136.185.210:7878/api/m5/home/multidata'
// }).then((res) => {
//   console.log(res);
// })

// axios({
//   url: 'http://152.136.185.210:7878/api/m5/home/data?type=pop&page=1'
// }).then((res) => {
//   console.log(res);
// })


// axios.all([axios({
//   url: 'http://152.136.185.210:7878/api/m5/home/multidata'
// }), axios({
//   url: 'http://152.136.185.210:7878/api/m5/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// })])
// .then((res) => {
//   console.log(res);
// })


// axios.all([axios({
//   url: 'http://152.136.185.210:7878/api/m5/home/multidata'
// }), axios({
//   url: 'http://152.136.185.210:7878/api/m5/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// })])
// .then(axios.spread((res1, res2) => {     // spread(分散的意思)，作用是把all里面的结果分开
//   console.log(res1);
//   console.log(res2);
// }))
