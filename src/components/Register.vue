<template>
  <div id="registerWrapper">
    <div id="registerContent">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户注册</span>
        </div>
        <div id="registerContentBody">
          <el-input
            id="newusername"
            v-model="newUser.newusername" 
            clearable 
           
          ></el-input>
          <el-input
            id="newpassword"
            v-model="newUser.newpassword"
            show-password
            clearable
          ></el-input>
        </div>
        <div id="registerSubmit">
          <el-button id="systemSubmit" @click="registerSystem">注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "register",
  data() {
    return {
      newUser: {
        newusername: "",
        newpassword: "",
      },
    };
  },
  methods: {
    // CORS
    registerSystem() {
      Axios.get('http://localhost:3000/register/check',{
          params:this.newUser
      }).then(function(response){
        alert(response.data.message)
      })
      // Axios.post("http://localhost:3000/register", {
      //   params: this.newUser,
      // }).then(function (response) {
      //   alert(response.data.state + '\n' + response.data.message);
      // });
    },
  },
};
</script>

<style>
#registerWrapper {
  /* background-color: purple; */
  height: 100%;
}
#registerContent {
  width: 400px;
  margin: 0 auto;
  padding-top: 100px;
}
#systemSubmit {
  display: block;
  margin: 0 auto;
  background-color: #0a9588;
  color: white;
  border-color: #0a9588;
}
#newpassword {
  margin-top: 5px;
  margin-bottom: 8px;
}
</style>
