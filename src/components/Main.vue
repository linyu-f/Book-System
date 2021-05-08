<template>
  <div id="mainBook">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>系统登录</span>
        <el-button type="text">忘记密码</el-button>
      </div>
      <div id="loginContent">
        <el-input id="username" v-model="user.username"></el-input>
        <el-input id="password" v-model="user.password"></el-input>
        <el-button id="submit">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mainBook",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
  },
};
</script>

<style>
#mainBook {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
.clearfix > .el-button {
  float: right;
  padding: 3px 0;
}
#submit {
  background-color: #0a9588;
  color: white;
  width: 150px;
  display: block;
  margin: 0 auto;
}
#loginContent > * {
  margin-top: 5px;
}
</style>