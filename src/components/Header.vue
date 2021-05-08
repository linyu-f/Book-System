<template>
  <div id="headerBook">
    <div id="headerFunction">
      <router-link to="/register">
        <el-button>用户注册</el-button>
      </router-link>
      <router-link to="/login">
        <el-button>系统登录</el-button>
      </router-link>
      <router-link to="/work">
        <el-button>工作中心</el-button>
      </router-link>
      <router-link to="/student">
        <el-button>学生信息</el-button>
      </router-link>
      <router-link to="/book">
        <el-button>图书信息</el-button>
      </router-link>
      <router-link to="/cnnode">
        <el-button>node论坛</el-button>
      </router-link>
    </div>
    <div id="headerTitle">
      <span>
        <router-link to="/index">
          {{ message }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBook",
  data() {
    return {
      message: "江西软件大学-新型积分管理系统",
    };
  },
};
</script>

<style>
#headerTitle {
  /* background-color: blue; */
  width: 400px;
  height: 60px;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  line-height: 60px;
}
#headerFunction {
  height: 60px;
  float: right;
}
#headerFunction > a > .el-button {
  background-color: #0a9588;
  color: white;
  border-color: #0a9588;
  margin-top: 10.2px;
}
</style>