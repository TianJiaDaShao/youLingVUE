import "../styles/usage/page/app.scss";

import firstPage from "./components/firstPage.vue";
import index from "./components/index.vue";
import tuiJian from "./components/tuiJian.vue";
import danPin from "./components/danPin.vue";
import zhangZiShi from "./components/zhangZiShi.vue";
import zhangdetail from "./components/zhangdetail.vue";
import mine from "./components/mine.vue";

import Vue from "./libs/vue.js";
import VueRouter from "./libs/vue-router.js";
Vue.use(VueRouter);

let router = new VueRouter();

let App = Vue.extend({});

router.map({
    '/': {
        component: index
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
    '/mine': {
        component: mine
    },
    '/zhangdetail': {
        component: zhangdetail
    }

});

router.start(App, 'body');
