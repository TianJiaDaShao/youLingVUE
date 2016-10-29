import "../styles/usage/page/app.scss";
import commonUtil from "./utils/commonUtils";
// 自定义scroll指令
commonUtil.dirScroll();

// pages
import firstPage from "./components/firstPage.vue";
import index from "./components/index.vue";
import tuiJian from "./components/tuiJian.vue";
import danPin from "./components/danPin.vue";
import danPinDetail from "./components/danPinDetail.vue";
import zhangZiShi from "./components/zhangZiShi.vue";
import zhangdetail from "./components/zhangdetail.vue";
import tuiJianDetail from "./components/tuiJianDetail.vue";
import mine from "./components/mine.vue";
import register from "./components/register.vue";
import phoneNubLogin from "./components/phoneNubLogin.vue";

let router = new VueRouter();

import store from "./vuex/store";
let App = Vue.extend({
  store: store
});

router.map({

    '/':{
      component:firstPage
    },
    '/index': {
        component: index,
        subRoutes: {
            '/': {
                component: tuiJian
            },
            '/danPin': {
                component: danPin
            },
            '/zhangZiShi': {
                component: zhangZiShi
            }
        }
    },

    '/mine':{
     component:mine,
     subRoutes:{
       '/':{
         component:register
       },
       '/phoneNubLogin':{
         component:phoneNubLogin
       }
     }
   },

    '/zhangdetail/:id': {
        name:'zhangdetail',
        component: zhangdetail
    },
    '/tuiJianDetail/:id': {
        name: 'tuiJianDetail',
        component: tuiJianDetail
    },
    '/danPinDetail': {
        component: danPinDetail
    }

});

router.start(App, 'body');

setTimeout(function(){
    router.go('/index');
},3000)
