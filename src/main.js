import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vue 插件导入
import VueRouter from 'vue-router';
Vue.use(ElementUI)
// 通过use方法使用
Vue.use(VueRouter)
Vue.config.productionTip = false
// 导入
import Login from './components/Login.vue';
import Work from './components/Work.vue';
import Student from './components/Student.vue';
import Book from './components/Book.vue';
import CNNode from './components/CNNode.vue';
import Index from './components/Index.vue';
import Register from './components/Register.vue';
// 路由 途径
const routes = [
  {path: '/login', component: Login},
  {path: '/work', component: Work},
  {path: '/student', component: Student},
  {path: '/book', component: Book},
  {path: '/cnnode',component: CNNode},
  {path: '/index',component: Index},
  {path: '/register',component: Register}
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
