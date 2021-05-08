<template>
  <div id="cnnode">
    cnnode论坛
    <li v-for="(value, index) in this.topicsArr" :key="index">{{value.title}}</li>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      topicsArr: [],
    };
  },
  created() {
    let that = this;
    Axios.get(" https://cnodejs.org/api/v1/topics").then(function (response) {
      console.log(response);
      let data = response.data;
      if (data.success) {
        that.topicsArr = data.data;
        console.log(that.topicsArr);
      }
    });
  },
};
</script>

<style>
</style>