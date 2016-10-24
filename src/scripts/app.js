import "../styles/usage/page/app.scss";

import firstPage from "./components/firstPage.vue";
import index from "./components/index.vue";
import tuiJian from "./components/tuiJian.vue";
import danPin from "./components/danPin.vue";
import zhangZiShi from "./components/zhangZiShi.vue";
import mine from "./components/mine.vue";
import register from "./components/register.vue";
import phoneNubLogin from "./components/phoneNubLogin.vue";

import Vue from "./libs/vue.js";
import VueRouter from "./libs/vue-router.js";
Vue.use(VueRouter);

let router = new VueRouter();

let App=Vue.extend({});

router.map({
    '/':{
      component:firstPage
    },
    '/index':{
      component:index,
      subRoutes:{
        '/':{
          component:tuiJian
        },
        '/danPin':{
          component:danPin
        },
        '/zhangZiShi':{
          component:zhangZiShi
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
   }
});

router.start(App, 'body');

setTimeout(function(){
    router.go('/index');
},3000)
