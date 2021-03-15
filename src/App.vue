<template>
  <div id="app">
    {{msg}}
    <div>
      {{data}}
    </div>
  </div>
</template>

<script>

// import axios from 'axios'
import {request} from './networks/request'

export default {
  name: 'App',
  data () {
    return {
      msg: 'APP',
      data: {}
    }
  },
  created () {
    request({
      url: '/home/multidata'
    }).then(res => {
      console.log('success');
      console.log(res);
      this.data = res
    }).catch(err => {
      console.log('err');
      console.log(err);
    })
    // axios({
    //   url: 'http://152.136.185.210:7878/api/m5/home/multidata'
    // }).then((res) => {
    //   console.log('调用成功');
    //   console.log(res);
    //   this.data = res;
    // })
  }

}
</script>

<style>

</style>
