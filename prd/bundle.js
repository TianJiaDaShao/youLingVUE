/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	var _firstPage = __webpack_require__(6);
	
	var _firstPage2 = _interopRequireDefault(_firstPage);
	
	var _index = __webpack_require__(9);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _tuiJian = __webpack_require__(14);
	
	var _tuiJian2 = _interopRequireDefault(_tuiJian);
	
	var _danPin = __webpack_require__(17);
	
	var _danPin2 = _interopRequireDefault(_danPin);
	
<<<<<<< HEAD
	var _danPinDetail = __webpack_require__(20);
	
	var _danPinDetail2 = _interopRequireDefault(_danPinDetail);
	
	var _zhangZiShi = __webpack_require__(23);
	
	var _zhangZiShi2 = _interopRequireDefault(_zhangZiShi);
	
	var _zhangdetail = __webpack_require__(26);
	
	var _zhangdetail2 = _interopRequireDefault(_zhangdetail);
	
	var _tuiJianDetail = __webpack_require__(29);
	
	var _tuiJianDetail2 = _interopRequireDefault(_tuiJianDetail);
	
	var _mine = __webpack_require__(31);
	
	var _mine2 = _interopRequireDefault(_mine);
	
	var _register = __webpack_require__(34);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _phoneNubLogin = __webpack_require__(37);
	
	var _phoneNubLogin2 = _interopRequireDefault(_phoneNubLogin);
	
	var _store = __webpack_require__(40);
=======
	var _zhangZiShi = __webpack_require__(20);
	
	var _zhangZiShi2 = _interopRequireDefault(_zhangZiShi);
	
	var _zhangdetail = __webpack_require__(23);
	
	var _zhangdetail2 = _interopRequireDefault(_zhangdetail);
	
	var _tuiJianDetail = __webpack_require__(26);
	
	var _tuiJianDetail2 = _interopRequireDefault(_tuiJianDetail);
	
	var _mine = __webpack_require__(29);
	
	var _mine2 = _interopRequireDefault(_mine);
	
	var _register = __webpack_require__(32);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _phoneNubLogin = __webpack_require__(35);
	
	var _phoneNubLogin2 = _interopRequireDefault(_phoneNubLogin);
	
	var _store = __webpack_require__(38);
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 自定义scroll指令
	_commonUtils2.default.dirScroll();
	
	// pages
	
	
	var router = new VueRouter();
	
	var App = Vue.extend({
	    store: _store2.default
	});
	
	router.map({
	
	    '/': {
	        component: _firstPage2.default
	    },
	    '/index': {
	        component: _index2.default,
	        subRoutes: {
	            '/': {
	                component: _tuiJian2.default
	            },
	            '/danPin': {
	                component: _danPin2.default
	            },
	            '/zhangZiShi': {
	                component: _zhangZiShi2.default
	            }
	        }
	    },
	
	    '/mine': {
	        component: _mine2.default,
	        subRoutes: {
	            '/': {
	                component: _register2.default
	            },
	            '/phoneNubLogin': {
	                component: _phoneNubLogin2.default
	            }
	        }
	    },
	
	    '/zhangdetail': {
	        component: _zhangdetail2.default
	    },
<<<<<<< HEAD
	    '/tuiJianDetail': {
	        component: _tuiJianDetail2.default
	    },
	    '/danPinDetail': {
	        component: _danPinDetail2.default
=======
	    '/tuiJianDetail/:id': {
	        name: 'tuiJianDetail',
	        component: _tuiJianDetail2.default
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	    }
	
	});
	
	router.start(App, 'body');
	
	setTimeout(function () {
	    router.go('/index');
	}, 3000);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    focus: function focus(element) {
	        $(element).focus();
	    },
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    dirScroll: function dirScroll() {
	        var that = this;
	        // 自定义指令
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded('#index-scroll', function () {
	                    new IScroll(value);
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
<<<<<<< HEAD
	var __vue_styles__ = {}
=======
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\firstPage.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4fb64666/firstPage.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//     <img :src="imgurl" alt="" id="firstPage_imgurl">
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      imgurl: './images/md_splash.jpg'
	    };
	  },
	  ready: function ready() {}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<img :src=\"imgurl\" alt=\"\" id=\"firstPage_imgurl\">\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
<<<<<<< HEAD
	var __vue_styles__ = {}
=======
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-079eddc0/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(11);
	
	var _getters = __webpack_require__(12);
	
	// <template>
	//     <div class="index-container">
	//       <router-view></router-view>
	//     </div>
	//     <footer id="footer">
	//         <ul>
	//           <li :class="curIndex == $index ? 'active' : ''"
<<<<<<< HEAD
	//               @click="changPage($index)"
=======
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//               v-for="tab in tablist"
	//               v-link="{path:tab.path}"
	//           >
	//             <img v-if="curIndex == $index" :src="tab.activeIcon">
	//             <img v-else :src="tab.icon">
	//             <b>{{tab.name}}</b>
	//           </li>
	//         </ul>
	//     </footer>
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      curIndex: _getters.getIndex
	    },
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      tablist: [{ path: '/index/', icon: './images/md_tabbar_featured.png', acticeIcon: './images/md_tabbar_featured_on.png', name: '推荐' }, { path: '/index/danPin', icon: './images/md_tabbar_singleitem.png', activeIcon: './images/md_tabbar_singleitem_on.png', name: '单品' }, { path: '/index/zhangZiShi', icon: './images/md_tabbar_aritcles.png', activeIcon: './images/md_tabbar_aritcles_on.png', name: '涨姿势' }, { path: '/mine', icon: './images/md_tabbar_mine.png', activeIcon: './images/md_tabbar_mine_on.png', name: '我的' }]
	    };
<<<<<<< HEAD
	  },
	
	
	  methods: {
	    changPage: function changPage(i) {}
=======
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var changeIndex = exports.changeIndex = function changeIndex(_ref, tabIndex) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;
	
	  dispatch('CHANGEINDEX', tabIndex);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getIndex = exports.getIndex = function getIndex(state) {
	  return state.tabIndex;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "\n<div class=\"index-container\">\n  <router-view></router-view>\n</div>\n<footer id=\"footer\">\n    <ul>\n      <li :class=\"curIndex == $index ? 'active' : ''\"\n          @click=\"changPage($index)\"\n          v-for=\"tab in tablist\"\n          v-link=\"{path:tab.path}\"\n      >\n        <img v-if=\"curIndex == $index\" :src=\"tab.activeIcon\">\n        <img v-else :src=\"tab.icon\">\n        <b>{{tab.name}}</b>\n      </li>\n    </ul>\n</footer>\n";
=======
	module.exports = "\n<div class=\"index-container\">\n  <router-view></router-view>\n</div>\n<footer id=\"footer\">\n    <ul>\n      <li :class=\"curIndex == $index ? 'active' : ''\"\n          v-for=\"tab in tablist\"\n          v-link=\"{path:tab.path}\"\n      >\n        <img v-if=\"curIndex == $index\" :src=\"tab.activeIcon\">\n        <img v-else :src=\"tab.icon\">\n        <b>{{tab.name}}</b>\n      </li>\n    </ul>\n</footer>\n";
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
<<<<<<< HEAD
	var __vue_styles__ = {}
=======
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\tuiJian.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4678c37c/tuiJian.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
<<<<<<< HEAD
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
=======
	var _actions = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="tuijian-box">
	//     <h1 class="hhh">
	//       我的推荐
	//     </h1>
	//     <section id="index-scroll">
	//       <div>
	//         <div class="head">
	//           <img v-bind:src="imgArrow" />
	//           <span>下拉刷新...</span>
	//         </div>
	//         <ul>
	//         <li v-for="l in list" @click="clc" v-link="{name: 'tuiJianDetail', params: {id: l.id}}">
	//           <div class="shops">
	//             <img v-for="limg in l.shops" v-bind:src="limg.img">
	//           </div>
	//           <div class="avatar">
	//             <img v-bind:src="l.avatar_img" alt="">
	//             <i>{{l.avatar_name}}</i>
	//           </div>
	//         </li>
	//       </ul>
	//         <div class="foot">
	//           <img v-bind:src="imgArrow" />
	//           <span>上拉加载更多...</span>
	//         </div>
	//       </div>
	//     </section>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	  data: function data() {
	    return {
	      list: [],
	      imgArrow: './images/arrow.png'
	    };
	  },
	
	  ready: function ready() {
	    var _this = this;
	
<<<<<<< HEAD
=======
	    this.change(0);
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	    var that = this;
	    this.$http.get('/mock/tuiJian.json').then(function (res) {
	      console.log(res.data.data.length);
	      _this.list = res.data.data;
	      // DOM 更新后，图片加载完 实例化 IScroll
	      Vue.nextTick(function () {
	        _commonUtils2.default.isAllLoaded('#index-scroll', function () {
	          var myScroll = new IScroll('#index-scroll', {
	            probeType: 3,
	            mouseWheel: true,
	            click: true
	          });
	
	          myScroll.scrollTo(0, -35);
	
	          var head = $('.head img'),
	              topImgHasClass = head.hasClass('up');
	          var foot = $('.foot img'),
	              bottomImgHasClass = head.hasClass('down');
	
	          myScroll.on('scroll', function () {
	            var y = this.y,
	                maxY = this.maxScrollY - y;
	            if (y >= 0) {
	              !topImgHasClass && head.addClass('up');
	              return '';
	            }
	            if (maxY >= 0) {
	              !bottomImgHasClass && foot.addClass('down');
	              return '';
	            }
	          });
	
	          myScroll.on('scrollEnd', function () {
	            if (this.y >= -35 && this.y < 0) {
	              myScroll.scrollTo(0, -35);
	              head.removeClass('up');
	            } else if (this.y >= 0) {
	              head.attr('src', './images/ajax-loader.gif');
	
	              // ajax下拉刷新数据
	              that.$http.get('/mock/tuiJian_refresh.json').then(function (res) {
	                that.list = res.data.data.concat(that.list);
	                myScroll.scrollTo(0, -35);
	                head.removeClass('up');
	                head.attr('src', './images/arrow.png');
	                Vue.nextTick(function () {
	                  //当你的滚动区域的内容发生改变 或是 滚动区域不正确，都用通过调用refresh 来使得iscroll 重新计算滚动的区域，包括滚动条，来使得iscroll 适合当前的dom
	                  myScroll.refresh();
	                });
	              });
	            }
	
	            var self = this;
	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -35 && maxY < 0) {
	              myScroll.scrollTo(0, self.maxScrollY + 35);
	              foot.removeClass('down');
	            } else if (maxY >= 0) {
	              foot.attr('src', './images/ajax-loader.gif');
	              //ajax上拉加载数据
	              that.$http.get('/mock/tuiJian_more.json').then(function (res) {
	                that.list = that.list.concat(res.data.data);
	                foot.removeClass('down');
	                foot.attr('src', './images/arrow.png');
	                Vue.nextTick(function () {
	                  myScroll.refresh();
	                  myScroll.scrollTo(0, self.maxScrollY + 35);
	                });
	              });
	            }
	          });
	        });
	      });
	    });
	  },
	  methods: {
	    clc: function clc() {
	      console.log(1);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="tuijian-box">
	//     <h1 class="hhh">
	//       我的推荐
	//     </h1>
	//     <section id="index-scroll">
	//       <div>
	//         <div class="head">
	//           <img v-bind:src="imgArrow" />
	//           <span>下拉刷新...</span>
	//         </div>
	//         <ul>
	//           <li v-for="l in list" @click="clc" v-link="{path:'/tuiJianDetail'}">
	//             <div class="shops">
	//               <img v-for="limg in l.shops" v-bind:src="limg.img">
	//             </div>
	//             <div class="avatar">
	//               <img v-bind:src="l.avatar_img" alt="">
	//               <i>{{l.avatar_name}}</i>
	//             </div>
	//           </li>
	//         </ul>
	//         <div class="foot">
	//           <img v-bind:src="imgArrow" />
	//           <span>上拉加载更多...</span>
	//         </div>
	//       </div>
	//     </section>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 16 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "\n<div class=\"tuijian-box\">\n  <h1 class=\"hhh\">\n    我的推荐\n  </h1>\n  <section id=\"index-scroll\">\n    <div>\n      <div class=\"head\">\n        <img v-bind:src=\"imgArrow\" />\n        <span>下拉刷新...</span>\n      </div>\n      <ul>\n        <li v-for=\"l in list\" @click=\"clc\" v-link=\"{path:'/tuiJianDetail'}\">\n          <div class=\"shops\">\n            <img v-for=\"limg in l.shops\" v-bind:src=\"limg.img\">\n          </div>\n          <div class=\"avatar\">\n            <img v-bind:src=\"l.avatar_img\" alt=\"\">\n            <i>{{l.avatar_name}}</i>\n          </div>\n        </li>\n      </ul>\n      <div class=\"foot\">\n        <img v-bind:src=\"imgArrow\" />\n        <span>上拉加载更多...</span>\n      </div>\n    </div>\n  </section>\n</div>\n";
=======
	module.exports = "\n<div class=\"tuijian-box\">\n  <h1 class=\"hhh\">\n    我的推荐\n  </h1>\n  <section id=\"index-scroll\">\n    <div>\n      <div class=\"head\">\n        <img v-bind:src=\"imgArrow\" />\n        <span>下拉刷新...</span>\n      </div>\n      <ul>\n      <li v-for=\"l in list\" @click=\"clc\" v-link=\"{name: 'tuiJianDetail', params: {id: l.id}}\">\n        <div class=\"shops\">\n          <img v-for=\"limg in l.shops\" v-bind:src=\"limg.img\">\n        </div>\n        <div class=\"avatar\">\n          <img v-bind:src=\"l.avatar_img\" alt=\"\">\n          <i>{{l.avatar_name}}</i>\n        </div>\n      </li>\n    </ul>\n      <div class=\"foot\">\n        <img v-bind:src=\"imgArrow\" />\n        <span>上拉加载更多...</span>\n      </div>\n    </div>\n  </section>\n</div>\n";
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
<<<<<<< HEAD
	var __vue_styles__ = {}
=======
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\danPin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
<<<<<<< HEAD
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
=======
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
<<<<<<< HEAD
	  var id = "_v-41096046/danPin.vue"
=======
	  var id = "./danPin.vue"
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< HEAD
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	var _actions = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
=======
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(11);
	
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	// <template>
	//     <div class="danPin-container">
	//         <nav>
	//             <ul id="swiper-nav">
	//                 <li v-for="nav in danPinNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
	//             </ul>
	//         </nav>
	//         <section>
	//             <div class="swiper-container" id="index-swiper">
	//                 <div class="swiper-wrapper">
	//                     <div class="swiper-slide">
	//                         <section id="index-scroll">
<<<<<<< HEAD
	//                           <div>
	//                             <div class="head">
	//                               <img v-bind:src="imgArrow" />
	//                               <span>下拉刷新...</span>
	//                             </div>
	//                             <ul>
	//                                 <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
=======
	//                             <ul>
	//                                 <li v-for="l in danPin">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
<<<<<<< HEAD
	//                             <div class="foot">
	//                               <img v-bind:src="imgArrow" />
	//                               <span>上拉加载更多...</span>
	//                             </div>
	//                           </div>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
	//                         <section id="index-scroll2">
=======
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
<<<<<<< HEAD
	//                         <section id="index-scroll3">
=======
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
<<<<<<< HEAD
	//                         <section id="index-scroll4">
=======
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
<<<<<<< HEAD
	//                         <section id="index-scroll5">
=======
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
<<<<<<< HEAD
	//                         <section id="index-scroll6">
=======
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
<<<<<<< HEAD
	//                         <section id="index-scroll7">
=======
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
<<<<<<< HEAD
	//                         <section id="index-scroll8">
=======
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
<<<<<<< HEAD
	//                         <section id="index-scroll9">
=======
	//                         <section id="index-scroll">
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                             <ul>
	//                                 <li v-for="l in danPin">
	//                                   <span>
	//                                     <i><img v-bind:src="l.img" alt=""></i>
	//                                     <b>{{l.title}}</b>
	//                                     <em>￥{{l.price}}</em>
	//                                   </span>
	//                                 </li>
	//                             </ul>
	//                         </section>
	//                     </div>
	//                 </div>
	//             </div>
	//         </section>
	//     </div>
	// </template>
	//
	// <script>
	var mySwiper = null;
<<<<<<< HEAD
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      danPin: [],
	      curIndex: 0,
	      danPinNav: ['最新', '内搭', '外套', '裤子', '鞋', '箱包', '配饰', '饰品', '其他'],
	      imgArrow: './images/arrow.png'
	    };
	  },
	
	  ready: function ready() {
	    var _this = this;
	
	    this.change(1);
	    var that = this;
	    this.$http.get('/mock/danPin.json').then(function (res) {
	      _this.danPin = res.data.data;
	      Vue.nextTick(function () {
	        console.log(123);
	        _commonUtils2.default.isAllLoaded('#index-scroll', function () {
	          var myScroll = new IScroll('#index-scroll', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll2 = new IScroll('#index-scroll2', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll3 = new IScroll('#index-scroll3', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll4 = new IScroll('#index-scroll4', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll5 = new IScroll('#index-scroll5', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll6 = new IScroll('#index-scroll6', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll7 = new IScroll('#index-scroll7', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll8 = new IScroll('#index-scroll8', {
	            probeType: 3,
	            click: true
	          });
	          var myScroll9 = new IScroll('#index-scroll9', {
	            probeType: 3,
	            click: true
	          });
	
	          myScroll.scrollTo(0, -35);
	
	          var head = $('.head img'),
	              topImgHasClass = head.hasClass('up');
	          var foot = $('.foot img'),
	              bottomImgHasClass = head.hasClass('down');
	
	          myScroll.on('scroll', function () {
	            var y = this.y,
	                maxY = this.maxScrollY - y;
	            if (y >= 0) {
	              !topImgHasClass && head.addClass('up');
	              return '';
	            }
	            if (maxY >= 0) {
	              !bottomImgHasClass && foot.addClass('down');
	              return '';
	            }
	          });
	
	          myScroll.on('scrollEnd', function () {
	            if (this.y >= -35 && this.y < 0) {
	              myScroll.scrollTo(0, -35);
	              head.removeClass('up');
	            } else if (this.y >= 0) {
	              head.attr('src', './images/ajax-loader.gif');
	
	              // ajax下拉刷新数据
	              that.$http.get('/mock/danPin_refresh.json').then(function (res) {
	                that.danPin = res.data.data.concat(that.danPin);
	                myScroll.scrollTo(0, -35);
	                head.removeClass('up');
	                head.attr('src', './images/arrow.png');
	                Vue.nextTick(function () {
	                  //当你的滚动区域的内容发生改变 或是 滚动区域不正确，都用通过调用refresh 来使得iscroll 重新计算滚动的区域，包括滚动条，来使得iscroll 适合当前的dom
	                  myScroll.refresh();
	                  myScroll2.refresh();
	                  myScroll3.refresh();
	                  myScroll4.refresh();
	                  myScroll5.refresh();
	                  myScroll6.refresh();
	                  myScroll7.refresh();
	                  myScroll8.refresh();
	                  myScroll9.refresh();
	                });
	              });
	            }
	
	            var self = this;
	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -35 && maxY < 0) {
	              myScroll.scrollTo(0, self.maxScrollY + 35);
	              foot.removeClass('down');
	            } else if (maxY >= 0) {
	              foot.attr('src', './images/ajax-loader.gif');
	              //ajax上拉加载数据
	              that.$http.get('/mock/danPin_more.json').then(function (res) {
	                that.danPin = that.danPin.concat(res.data.data);
	                foot.removeClass('down');
	                foot.attr('src', './images/arrow.png');
	                Vue.nextTick(function () {
	                  myScroll.refresh();
	                  myScroll2.refresh();
	                  myScroll3.refresh();
	                  myScroll4.refresh();
	                  myScroll5.refresh();
	                  myScroll6.refresh();
	                  myScroll7.refresh();
	                  myScroll8.refresh();
	                  myScroll9.refresh();
	                  myScroll.scrollTo(0, self.maxScrollY + 35);
	                  myScroll2.scrollTo(0, self.maxScrollY + 35);
	                  myScroll3.scrollTo(0, self.maxScrollY + 35);
	                  myScroll4.scrollTo(0, self.maxScrollY + 35);
	                  myScroll5.scrollTo(0, self.maxScrollY + 35);
	                  myScroll6.scrollTo(0, self.maxScrollY + 35);
	                  myScroll7.scrollTo(0, self.maxScrollY + 35);
	                  myScroll8.scrollTo(0, self.maxScrollY + 35);
	                  myScroll9.scrollTo(0, self.maxScrollY + 35);
	                });
	              });
	            }
	          });
	        });
	      });
	
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll1',{
	      //       probeType: 3,
	      //       mouseWheel: true,
	      //       click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll2',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll3',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll4',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll5',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll6',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll7',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll8',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	      //
	      // setTimeout(function() {
	      //     new IScroll('#index-scroll9',{
	      //             click:true
	      //     }
	      // );
	      // }, 500);
	
	
	      mySwiper = new Swiper("#index-swiper", {
	        onSlideChangeStart: function onSlideChangeStart() {
	          that.curIndex = mySwiper.activeIndex;
	        }
	      });
	    });
	  },
	  methods: {
	    switchSwiper: function switchSwiper(index) {
	      this.curIndex = index;
	      mySwiper.slideTo(index);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"danPin-container\">\n    <nav>\n        <ul id=\"swiper-nav\">\n            <li v-for=\"nav in danPinNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\">{{nav}}</li>\n        </ul>\n    </nav>\n    <section>\n        <div class=\"swiper-container\" id=\"index-swiper\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                      <div>\n                        <div class=\"head\">\n                          <img v-bind:src=\"imgArrow\" />\n                          <span>下拉刷新...</span>\n                        </div>\n                        <ul>\n                            <li v-for=\"l in danPin\" v-link=\"{path:'/danPinDetail'}\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                        <div class=\"foot\">\n                          <img v-bind:src=\"imgArrow\" />\n                          <span>上拉加载更多...</span>\n                        </div>\n                      </div>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll2\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll3\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll4\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll5\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll6\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll7\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll8\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll9\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\danPinDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-06f549b7/danPinDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <img v-bind:src="danPinDetail_back.png" alt="">
	//   <div class="danPin-container">
	//       <ul  id="index-scroll">
	//         <li v-for="l in danPin">
	//           <span>
	//             <i><img v-bind:src="l.img" alt=""></i>
	//             <b>{{l.title}}</b>
	//             <em>￥{{l.price}}</em>
	//           </span>
	//         </li>
	//       </ul>
	//   </div>
	// </template>
	//
	// <script>
	var mySwiper = null;
	exports.default = {
	  data: function data() {
	    return {
	      danPin: []
	    };
	  },
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/danPin.json').then(function (res) {
	      _this.danPin = res.data.data;
	
	      setTimeout(function () {
	        new IScroll('#index-scroll', {
	          click: true
	        });
	      }, 500);
	    });
	  },
	  methods: {
	    switchSwiper: function switchSwiper(index) {
	      this.curIndex = index;
	      mySwiper.slideTo(index);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<img v-bind:src=\"danPinDetail_back.png\" alt=\"\">\n<div class=\"danPin-container\">\n    <ul  id=\"index-scroll\">\n      <li v-for=\"l in danPin\">\n        <span>\n          <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n          <b>{{l.title}}</b>\n          <em>￥{{l.price}}</em>\n        </span>\n      </li>\n    </ul>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zhangZiShi.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-003f9afb/zhangZiShi.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
=======
	
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.changeIndex
	        }
	    },
	    data: function data() {
	        return {
	            danPin: [],
	            curIndex: 0,
	            danPinNav: ['最新', '内搭', '外套', '裤子', '鞋', '箱包', '配饰', '饰品', '其他']
	        };
	    },
	
	    ready: function ready() {
	        var _this = this;
	
	        this.change(1);
	        var that = this;
	        this.$http.get('/mock/danPin.json').then(function (res) {
	            _this.danPin = res.data.data;
	
	            setTimeout(function () {
	                new IScroll('#index-scroll', {
	                    click: true
	                });
	            }, 500);
	
	            mySwiper = new Swiper("#index-swiper", {
	                onSlideChangeStart: function onSlideChangeStart() {
	                    that.curIndex = mySwiper.activeIndex;
	                }
	            });
	        });
	    },
	    methods: {
	        switchSwiper: function switchSwiper(index) {
	            this.curIndex = index;
	            mySwiper.slideTo(index);
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"danPin-container\">\n    <nav>\n        <ul id=\"swiper-nav\">\n            <li v-for=\"nav in danPinNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\">{{nav}}</li>\n        </ul>\n    </nav>\n    <section>\n        <div class=\"swiper-container\" id=\"index-swiper\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\">\n                    <section id=\"index-scroll\">\n                        <ul>\n                            <li v-for=\"l in danPin\">\n                              <span>\n                                <i><img v-bind:src=\"l.img\" alt=\"\"></i>\n                                <b>{{l.title}}</b>\n                                <em>￥{{l.price}}</em>\n                              </span>\n                            </li>\n                        </ul>\n                    </section>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zhangZiShi.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./zhangZiShi.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	var _actions = __webpack_require__(11);
	
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.changeIndex
	        }
	    },
	    data: function data() {
	        return {
	            list: []
	        };
	    },
	
	    ready: function ready() {
	        var _this = this;
	
	        this.change(2);
	        var that = this;
	        this.$http.get('/mock/zhangZiShi.json').then(function (res) {
	            _this.list = res.data.data;
	            setTimeout(function () {
	                new IScroll('#index-scroll', {
	                    click: true
	                });
	            }, 500);
	        });
<<<<<<< HEAD
	    },
	    methods: {
	        clc: function clc() {}
=======
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div class="gesture">
	//         <header>
	//             涨姿势
	//         </header>
	//         <section id="index-scroll">
	//             <ul>
<<<<<<< HEAD
	//                 <li v-for="l in list" @click="clc" v-link="{path:'/zhangdetail'}">
	//                     <img v-bind:src="l.img" alt="">
	//                     <i>{{l.title}}</i>
	//                     <p>{{l.detail}}</p>
	//                     <b><span>涨姿势</span><span>{{l.type}}</span></b>
	//                     <b><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">{{l.num}}</span><span>{{l.time}}</span></b>
	//                     <p>{{l.det}}</p>
	//                     <b class="b1"><span>涨姿势</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{l.type}}</span></b>
	//                     <b class="b2"><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">&nbsp;&nbsp;{{l.num}}</span><span>{{l.time}}</span></b>
=======
	//
	//                 <li v-for="l in list" >
	//                     <img v-bind:src="l.img" v-link="{path:'/zhangdetail'}">
	//                     <i v-link="{path:'/zhangdetail'}">{{l.title}}</i>
	//                     <p>{{l.detail}}</p>
	//                     <b class="b1"><span>涨姿势</span><span>{{l.type}}</span></b>
	//                     <b class="b2"><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">{{l.num}}</span><span>{{l.time}}</span></b>
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//                 </li>
	//             </ul>
	//         </section>
	//     </div>
	// </template>
	// <script>

/***/ },
<<<<<<< HEAD
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"gesture\">\n    <header>\n        涨姿势\n    </header>\n    <section id=\"index-scroll\">\n        <ul>\n            <li v-for=\"l in list\" @click=\"clc\" v-link=\"{path:'/zhangdetail'}\">\n                <img v-bind:src=\"l.img\" alt=\"\">\n                <i>{{l.title}}</i>\n                <p>{{l.detail}}</p>\n                <b><span>涨姿势</span><span>{{l.type}}</span></b>\n                <b><span>作者：领哥</span><span><img src=\"/images/md_view_xs.png\" alt=\"\">{{l.num}}</span><span>{{l.time}}</span></b>\n                <p>{{l.det}}</p>\n                <b class=\"b1\"><span>涨姿势</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{l.type}}</span></b>\n                <b class=\"b2\"><span>作者：领哥</span><span><img src=\"/images/md_view_xs.png\" alt=\"\">&nbsp;&nbsp;{{l.num}}</span><span>{{l.time}}</span></b>\n            </li>\n        </ul>\n    </section>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(27)
=======
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"gesture\">\n    <header>\n        涨姿势\n    </header>\n    <section id=\"index-scroll\">\n        <ul>\n\n            <li v-for=\"l in list\" >\n                <img v-bind:src=\"l.img\" v-link=\"{path:'/zhangdetail'}\">\n                <i v-link=\"{path:'/zhangdetail'}\">{{l.title}}</i>\n                <p>{{l.detail}}</p>\n                <b class=\"b1\"><span>涨姿势</span><span>{{l.type}}</span></b>\n                <b class=\"b2\"><span>作者：领哥</span><span><img src=\"/images/md_view_xs.png\" alt=\"\">{{l.num}}</span><span>{{l.time}}</span></b>\n            </li>\n        </ul>\n    </section>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(24)
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\zhangdetail.vue: named exports in *.vue files are ignored.")}
<<<<<<< HEAD
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
=======
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
<<<<<<< HEAD
	  var id = "_v-36849a2b/zhangdetail.vue"
=======
	  var id = "./zhangdetail.vue"
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
<<<<<<< HEAD
/* 27 */
=======
/* 24 */
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="gesture_detail">
<<<<<<< HEAD
=======
	//         <div v-if="shareshow" class="yo-mask"></div>
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//         <header>
	//             <div>
	//                 <div>
	//                     <img v-link="{path:'/index/zhangZiShi'}" src="/images/md_nav_back.png" alt="">
	//                     <p>有领资讯</p>
	//                 </div>
	//                 <img src="/images/md_share.png" @click="showShare" alt="">
	//             </div>
	//         </header>
<<<<<<< HEAD
	//         <div id="share">
	//             <p class="sharetop"><img src="/images/com_taobao_tae_sdk_web_view_title_bar_close.9.png" alt="">&nbsp;&nbsp;分享</p>
=======
	//         <div id="share" v-if="shareshow">
	//             <p class="sharetop"><img @click="notshowShare" src="/images/com_taobao_tae_sdk_web_view_title_bar_close.9.png" alt="">&nbsp;&nbsp;分享</p>
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	//             <ul>
	//                 <li><img src="/images/md_share_wechat.png" alt="">
	//                     <p>微信好友</p>
	//                 </li>
	//                 <li><img src="/images/md_share_moments.png" alt="">
	//                     <p>微信朋友圈</p>
	//                 </li>
	//                 <li><img src="/images/md_share_weibo.png" alt="">
	//                     <p>新浪微博</p>
	//                 </li>
	//             </ul>
	//             <ul>
	//                 <li><img src="/images/md_share_qq.png" alt="">
	//                     <p>QQ好友</p>
	//                 </li>
	//                 <li><img src="/images/md_share_copylink.png" alt="">
	//                     <p>复制链接</p>
	//                 </li>
	//             </ul>
	//         </div>
	//         <section id="index-scroll">
	//             <div>
	//                 <div class="top" v-for="l in list">
	//                     <i>{{l.title}}</i>
	//                     <b class="b1"><span>涨姿势</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{l.type}}</span></b>
	//                     <b class="b2"><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">&nbsp;&nbsp;{{l.num}}</span><span>{{l.time}}</span></b>
	//                 </div>
	//                 <div class="detail">
	//                     <p>关于肤色这个问题，选择衣服颜色时的搭配就会显得尤为重要，无论是肤色黑的还是白的都会有一定的烦恼。</p>
	//                     <p>因此小编这期打算说一下肤色偏白的人更适合怎样的色调？</p>
	//                     <p>How to choose? 肤色偏白虽然会比肤色偏黑的男生多了很多选择，但有时候反而是太多却不知道怎样去挑选。</p>
	//                     <img src="/images/fd40bc766771c3be80fb085666c259d1.jpg" alt="">
	//                     <p>因此可能很多肤色白的男生始终坚持黑白灰三个基本色，而事实上你可以大胆去尝试其他色系，基本都不会有问题。<b>肤色白的人对跳跃性的颜色会有很好的掌控能力，</b>很多时候都能穿出属于自己的风格。</p>
	//                     <img src="/images/58b93e6ffcc4c149c9bb35a104f0058c.jpg" alt="">
	//                     <p>首选说一下经典的军绿色，肤色白的人会很好地映衬出这件颜色的特别之处，而肤色偏黑的人穿上去则会显得脏脏的。冬天则外搭一件白色或者黑色的夹克，满满的学院风，瞬间都青春了好几岁。</p>
	//                     <img src="/images/a88adaabfb5817ffd6b14b9f87e6ab54.jpg" alt="">
	//                     <p><b>对于肤色白的男生来说，浅色系单品真的很上镜。</b>类似浅灰，浅蓝，水洗白这种色调，都可以考虑入手，因为会显得你既大方同时又带给别人一种很舒适的感觉。</p>
	//                     <img src="/images/7e241f1a66f8a54b50e388d24b07bd21.jpg" alt="">
	//                     <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
	//                     <img src="/images/70069d5e28f79522d53524364feedd35.jpg" alt="">
	//                     <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
	//                     <img src="/images/012b39c1b01ea2aa417618681e43e46a.jpg" alt="">
	//                     <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
	//                     <img src="/images/b31b88045b0127b37b2b8a05a57967fa.jpg" alt="">
	//                     <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
	//                     <img src="/images/b3aebe2378f76854d04257037929acbd (1).jpg" alt="">
	//                     <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
	//                     <img src="/images/c9129ab3dd9fc1a26a64a9aa73eacbdb.jpg" alt="">
	//                     <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
	//                     <img src="/images/aaf479700527dc092535b7d9b84a2fb7.jpg" alt="">
	//                     <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
	//                 </div>
	//             </div>
	//         </section>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
<<<<<<< HEAD
	            list: []
=======
	            list: [],
	            shareshow: false
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	        };
	    },
	
	    ready: function ready() {
	        var _this = this;
	
<<<<<<< HEAD
	        var that = this;
	        this.$http.get('/mock/zhangZiShi.json').then(function (res) {
	            _this.list.push(res.data.data[0]); //对象转换为数组
	            console.log(_this.list);
=======
	        console.log("点击返回&点击分享");
	        var that = this;
	        this.$http.get('/mock/zhangZiShi.json').then(function (res) {
	            _this.list.push(res.data.data[0]); //对象转换为数组
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	            setTimeout(function () {
	                new IScroll('#index-scroll');
	            }, 500);
	        });
	    },
	    methods: {
	        showShare: function showShare() {
<<<<<<< HEAD
	            document.getElementById("share").display = "none";
=======
	            this.shareshow = true;
	        },
	        notshowShare: function notshowShare() {
	            this.shareshow = false;
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
<<<<<<< HEAD
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"gesture_detail\">\n    <header>\n        <div>\n            <div>\n                <img v-link=\"{path:'/index/zhangZiShi'}\" src=\"/images/md_nav_back.png\" alt=\"\">\n                <p>有领资讯</p>\n            </div>\n            <img src=\"/images/md_share.png\" @click=\"showShare\" alt=\"\">\n        </div>\n    </header>\n    <div id=\"share\">\n        <p class=\"sharetop\"><img src=\"/images/com_taobao_tae_sdk_web_view_title_bar_close.9.png\" alt=\"\">&nbsp;&nbsp;分享</p>\n        <ul>\n            <li><img src=\"/images/md_share_wechat.png\" alt=\"\">\n                <p>微信好友</p>\n            </li>\n            <li><img src=\"/images/md_share_moments.png\" alt=\"\">\n                <p>微信朋友圈</p>\n            </li>\n            <li><img src=\"/images/md_share_weibo.png\" alt=\"\">\n                <p>新浪微博</p>\n            </li>\n        </ul>\n        <ul>\n            <li><img src=\"/images/md_share_qq.png\" alt=\"\">\n                <p>QQ好友</p>\n            </li>\n            <li><img src=\"/images/md_share_copylink.png\" alt=\"\">\n                <p>复制链接</p>\n            </li>\n        </ul>\n    </div>\n    <section id=\"index-scroll\">\n        <div>\n            <div class=\"top\" v-for=\"l in list\">\n                <i>{{l.title}}</i>\n                <b class=\"b1\"><span>涨姿势</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{l.type}}</span></b>\n                <b class=\"b2\"><span>作者：领哥</span><span><img src=\"/images/md_view_xs.png\" alt=\"\">&nbsp;&nbsp;{{l.num}}</span><span>{{l.time}}</span></b>\n            </div>\n            <div class=\"detail\">\n                <p>关于肤色这个问题，选择衣服颜色时的搭配就会显得尤为重要，无论是肤色黑的还是白的都会有一定的烦恼。</p>\n                <p>因此小编这期打算说一下肤色偏白的人更适合怎样的色调？</p>\n                <p>How to choose? 肤色偏白虽然会比肤色偏黑的男生多了很多选择，但有时候反而是太多却不知道怎样去挑选。</p>\n                <img src=\"/images/fd40bc766771c3be80fb085666c259d1.jpg\" alt=\"\">\n                <p>因此可能很多肤色白的男生始终坚持黑白灰三个基本色，而事实上你可以大胆去尝试其他色系，基本都不会有问题。<b>肤色白的人对跳跃性的颜色会有很好的掌控能力，</b>很多时候都能穿出属于自己的风格。</p>\n                <img src=\"/images/58b93e6ffcc4c149c9bb35a104f0058c.jpg\" alt=\"\">\n                <p>首选说一下经典的军绿色，肤色白的人会很好地映衬出这件颜色的特别之处，而肤色偏黑的人穿上去则会显得脏脏的。冬天则外搭一件白色或者黑色的夹克，满满的学院风，瞬间都青春了好几岁。</p>\n                <img src=\"/images/a88adaabfb5817ffd6b14b9f87e6ab54.jpg\" alt=\"\">\n                <p><b>对于肤色白的男生来说，浅色系单品真的很上镜。</b>类似浅灰，浅蓝，水洗白这种色调，都可以考虑入手，因为会显得你既大方同时又带给别人一种很舒适的感觉。</p>\n                <img src=\"/images/7e241f1a66f8a54b50e388d24b07bd21.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/70069d5e28f79522d53524364feedd35.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/012b39c1b01ea2aa417618681e43e46a.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/b31b88045b0127b37b2b8a05a57967fa.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/b3aebe2378f76854d04257037929acbd (1).jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/c9129ab3dd9fc1a26a64a9aa73eacbdb.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/aaf479700527dc092535b7d9b84a2fb7.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n            </div>\n        </div>\n    </section>\n</div>\n";
=======
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"gesture_detail\">\n    <div v-if=\"shareshow\" class=\"yo-mask\"></div>\n    <header>\n        <div>\n            <div>\n                <img v-link=\"{path:'/index/zhangZiShi'}\" src=\"/images/md_nav_back.png\" alt=\"\">\n                <p>有领资讯</p>\n            </div>\n            <img src=\"/images/md_share.png\" @click=\"showShare\" alt=\"\">\n        </div>\n    </header>\n    <div id=\"share\" v-if=\"shareshow\">\n        <p class=\"sharetop\"><img @click=\"notshowShare\" src=\"/images/com_taobao_tae_sdk_web_view_title_bar_close.9.png\" alt=\"\">&nbsp;&nbsp;分享</p>\n        <ul>\n            <li><img src=\"/images/md_share_wechat.png\" alt=\"\">\n                <p>微信好友</p>\n            </li>\n            <li><img src=\"/images/md_share_moments.png\" alt=\"\">\n                <p>微信朋友圈</p>\n            </li>\n            <li><img src=\"/images/md_share_weibo.png\" alt=\"\">\n                <p>新浪微博</p>\n            </li>\n        </ul>\n        <ul>\n            <li><img src=\"/images/md_share_qq.png\" alt=\"\">\n                <p>QQ好友</p>\n            </li>\n            <li><img src=\"/images/md_share_copylink.png\" alt=\"\">\n                <p>复制链接</p>\n            </li>\n        </ul>\n    </div>\n    <section id=\"index-scroll\">\n        <div>\n            <div class=\"top\" v-for=\"l in list\">\n                <i>{{l.title}}</i>\n                <b class=\"b1\"><span>涨姿势</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{l.type}}</span></b>\n                <b class=\"b2\"><span>作者：领哥</span><span><img src=\"/images/md_view_xs.png\" alt=\"\">&nbsp;&nbsp;{{l.num}}</span><span>{{l.time}}</span></b>\n            </div>\n            <div class=\"detail\">\n                <p>关于肤色这个问题，选择衣服颜色时的搭配就会显得尤为重要，无论是肤色黑的还是白的都会有一定的烦恼。</p>\n                <p>因此小编这期打算说一下肤色偏白的人更适合怎样的色调？</p>\n                <p>How to choose? 肤色偏白虽然会比肤色偏黑的男生多了很多选择，但有时候反而是太多却不知道怎样去挑选。</p>\n                <img src=\"/images/fd40bc766771c3be80fb085666c259d1.jpg\" alt=\"\">\n                <p>因此可能很多肤色白的男生始终坚持黑白灰三个基本色，而事实上你可以大胆去尝试其他色系，基本都不会有问题。<b>肤色白的人对跳跃性的颜色会有很好的掌控能力，</b>很多时候都能穿出属于自己的风格。</p>\n                <img src=\"/images/58b93e6ffcc4c149c9bb35a104f0058c.jpg\" alt=\"\">\n                <p>首选说一下经典的军绿色，肤色白的人会很好地映衬出这件颜色的特别之处，而肤色偏黑的人穿上去则会显得脏脏的。冬天则外搭一件白色或者黑色的夹克，满满的学院风，瞬间都青春了好几岁。</p>\n                <img src=\"/images/a88adaabfb5817ffd6b14b9f87e6ab54.jpg\" alt=\"\">\n                <p><b>对于肤色白的男生来说，浅色系单品真的很上镜。</b>类似浅灰，浅蓝，水洗白这种色调，都可以考虑入手，因为会显得你既大方同时又带给别人一种很舒适的感觉。</p>\n                <img src=\"/images/7e241f1a66f8a54b50e388d24b07bd21.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/70069d5e28f79522d53524364feedd35.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/012b39c1b01ea2aa417618681e43e46a.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/b31b88045b0127b37b2b8a05a57967fa.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/b3aebe2378f76854d04257037929acbd (1).jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/c9129ab3dd9fc1a26a64a9aa73eacbdb.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n                <img src=\"/images/aaf479700527dc092535b7d9b84a2fb7.jpg\" alt=\"\">\n                <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>\n            </div>\n        </div>\n    </section>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\tuiJianDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./tuiJianDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="tuijian-detail">
	//     <header>
	//       <ul>
	//         <li v-link="{path: '/index'}">返回</li>
	//         <li class="title">
	//           {{{detailInfo.title}}}
	//         </li>
	//         <li class="iconfont">&#xe684;</li>
	//       </ul>
	//     </header>
	//     <article id="content" v-scroll="artId">
	//       <div>
	//         {{{detailInfo.content}}}
	//       </div>
	//     </article>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      title: '',
	      detailInfo: {},
	      artId: ''
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/tuiJian_detail.json').then(function (res) {
	      res.data.data.forEach(function (_ref) {
	        var id = _ref.id;
	        var title = _ref.title;
	        var content = _ref.content;
	
	        if (id == _this.$route.params.id) {
	          that.detailInfo = { title: title, content: content };
	          Vue.nextTick(function () {
	            // console.log(that.artId);
	            that.artId = "#content";
	            // var myScroll12 = new IScroll('#content', {
	            //   mouseWheel: true,
	            //   click: true
	            // });
	            console.log('dom更新了');
	          });
	          return;
	        }
	      });
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"tuijian-detail\">\n  <header>\n    <ul>\n      <li v-link=\"{path: '/index'}\">返回</li>\n      <li class=\"title\">\n        {{{detailInfo.title}}}\n      </li>\n      <li class=\"iconfont\">&#xe684;</li>\n    </ul>\n  </header>\n  <article id=\"content\" v-scroll=\"artId\">\n    <div>\n      {{{detailInfo.content}}}\n    </div>\n  </article>\n</div>\n";
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
<<<<<<< HEAD
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
=======
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\mine.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
<<<<<<< HEAD
	  var id = "_v-5df01ab3/tuiJianDetail.vue"
=======
	  var id = "./mine.vue"
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
<<<<<<< HEAD
/***/ function(module, exports) {

	module.exports = "\n<div class=\"\">\n  <div v-link=\"{path:'/index'}\"> 返回</div>\n</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\mine.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
=======
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(11);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      Xurl: '/images/md_nav_close_white.png'
	    };
	  },
	
	  ready: function ready() {
	    this.change(3);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div class="mine_container">
	//         <img :src="Xurl" class="Xurl" onclick="window.history.go(-1)">
	//         <router-view></router-view>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mine_container\">\n    <img :src=\"Xurl\" class=\"Xurl\" onclick=\"window.history.go(-1)\">\n    <router-view></router-view>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\register.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
<<<<<<< HEAD
	  var id = "_v-76a7f755/mine.vue"
=======
	  var id = "./register.vue"
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
<<<<<<< HEAD
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
=======
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
<<<<<<< HEAD
	
	var _actions = __webpack_require__(11);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      Xurl: '/images/md_nav_close_white.png'
	    };
	  },
	
	  ready: function ready() {
	    this.change(3);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div class="mine_container">
	//         <img :src="Xurl" class="Xurl" onclick="window.history.go(-1)">
	//         <router-view></router-view>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mine_container\">\n    <img :src=\"Xurl\" class=\"Xurl\" onclick=\"window.history.go(-1)\">\n    <router-view></router-view>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\register.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-59dc54a5/register.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      logo: '/images/md_logo.png',
	      label: '手机号',
	      register: '注册',
	      phone_login: '手机号登录',
	      other_login: '其他登录方式',
	      other: [{ other_login_img: '/images/btn_login_wechat_n.png' }, { other_login_img: '/images/btn_login_taobao_n.png' }, { other_login_img: '/images/btn_login_weibo_n.png' }],
	      tongyi: '注册代表同意',
	      xieyi: '用户协议',
	      phoneNubLoginPath: '/mine/phoneNubLogin'
	    };
	  },
	  ready: function ready() {
	    _commonUtils2.default.focus('#register_nub');
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="mine_main">
	//       <img :src="logo" class="logo">
	//       <h3 class="mine_label"><span>{{label}}</span></h3>
	//       <input type="text" name="phone" value="" id="register_nub">
	//       <div class="mine_bottom"></div>
	//       <div class="mine_register">{{register}}</div>
	//       <h3 class="phone_login"><span v-link="{path:phoneNubLoginPath}">{{phone_login}}</span></h3>
	//       <h4 class="other_login">{{other_login}}</h4>
	//       <div class="other_login_img">
	//         <img v-for="tab in other" :src="tab.other_login_img" alt="">
	//       </div>
	//       <h4 class="xieyi">
	//         {{tongyi}}
	//         <span>{{xieyi}}</span>
	//       </h4>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mine_main\">\n    <img :src=\"logo\" class=\"logo\">\n    <h3 class=\"mine_label\"><span>{{label}}</span></h3>\n    <input type=\"text\" name=\"phone\" value=\"\" id=\"register_nub\">\n    <div class=\"mine_bottom\"></div>\n    <div class=\"mine_register\">{{register}}</div>\n    <h3 class=\"phone_login\"><span v-link=\"{path:phoneNubLoginPath}\">{{phone_login}}</span></h3>\n    <h4 class=\"other_login\">{{other_login}}</h4>\n    <div class=\"other_login_img\">\n      <img v-for=\"tab in other\" :src=\"tab.other_login_img\" alt=\"\">\n    </div>\n    <h4 class=\"xieyi\">\n      {{tongyi}}\n      <span>{{xieyi}}</span>\n    </h4>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\phoneNubLogin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b17a53ac/phoneNubLogin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
=======
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      logo: '/images/md_logo.png',
	      label: '手机号',
	      register: '注册',
	      phone_login: '手机号登录',
	      other_login: '其他登录方式',
	      phoneNub: '',
	      other: [{ other_login_img: '/images/btn_login_wechat_n.png' }, { other_login_img: '/images/btn_login_taobao_n.png' }, { other_login_img: '/images/btn_login_weibo_n.png' }],
	      tongyi: '注册代表同意',
	      xieyi: '用户协议',
	      phoneNubLoginPath: '/mine/phoneNubLogin'
	    };
	  },
	  ready: function ready() {
	    _commonUtils2.default.focus('#register_nub');
	  },
	
	
	  methods: {
	    zhengZe: function zhengZe() {
	      console.log(this.phoneNub);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="mine_main">
	//       <img :src="logo" class="logo">
	//       <h3 class="mine_label"><span>{{label}}</span></h3>
	//       <input type="text" name="phone" v-model="phoneNub" id="register_nub" @change="zhengZe">
	//       <div class="mine_bottom"></div>
	//       <div class="mine_register">{{register}}</div>
	//       <h3 class="phone_login"><span v-link="{path:phoneNubLoginPath}">{{phone_login}}</span></h3>
	//       <h4 class="other_login">{{other_login}}</h4>
	//       <div class="other_login_img">
	//         <img v-for="tab in other" :src="tab.other_login_img" alt="">
	//       </div>
	//       <h4 class="xieyi">
	//         {{tongyi}}
	//         <span>{{xieyi}}</span>
	//       </h4>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mine_main\">\n    <img :src=\"logo\" class=\"logo\">\n    <h3 class=\"mine_label\"><span>{{label}}</span></h3>\n    <input type=\"text\" name=\"phone\" v-model=\"phoneNub\" id=\"register_nub\" @change=\"zhengZe\">\n    <div class=\"mine_bottom\"></div>\n    <div class=\"mine_register\">{{register}}</div>\n    <h3 class=\"phone_login\"><span v-link=\"{path:phoneNubLoginPath}\">{{phone_login}}</span></h3>\n    <h4 class=\"other_login\">{{other_login}}</h4>\n    <div class=\"other_login_img\">\n      <img v-for=\"tab in other\" :src=\"tab.other_login_img\" alt=\"\">\n    </div>\n    <h4 class=\"xieyi\">\n      {{tongyi}}\n      <span>{{xieyi}}</span>\n    </h4>\n</div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(36)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\phoneNubLogin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./phoneNubLogin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//     <div class="phoneNubLogin_main">
	//         <img :src="logo" class="logo">
	//         <nav>
	//             <div v-for="nav in loginNav" @click="switchLogin($index)" :class="loginIndex == $index ? 'navLoginActive': ''">
	//                 <span>{{nav}}</span>
	//             </div>
	//         </nav>
	//         <div class="swiper-container">
	//           <div class="swiper-wrapper">
	//               <div class="swiper-slide">
	//                 <input type="text" name="name" value="手机号">
	//                 <input type="text" name="name" value="密码">
	//               </div>
	//               <div class="swiper-slide">
	//                 <input type="text" name="name" value="手机号">
	//                 <input type="text" name="name" value="验证码">
	//               </div>
	//           </div>
	//         </div>
	//         <div class="phoneNubLogin_bt">
	//             <div class="login_button">{{login}}</div>
	//             <h3 class="register"><span v-link="{path:registerPath}">{{register}}</span></h3>
	//             <h4 class="other_login">{{other_login}}</h4>
	//             <div class="other_login_img">
	//               <img v-for="tab in other" :src="tab.other_login_img" alt="">
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	var mySwiper = null;
	exports.default = {
	  data: function data() {
	    return {
	      logo: '/images/md_logo.png',
	      loginIndex: '0',
	      login: '登录',
	      register: '注册',
	      other_login: '其他登录方式',
	      other: [{ other_login_img: '/images/btn_login_wechat_n.png' }, { other_login_img: '/images/btn_login_taobao_n.png' }, { other_login_img: '/images/btn_login_weibo_n.png' }],
	      loginNav: ['密码登录', "验证码登录"],
	      registerPath: './'
	    };
	  },
	  ready: function ready() {
	    var that = this;
	    mySwiper = new Swiper(".swiper-container", {
	      onSlideChangeStart: function onSlideChangeStart() {
	        that.loginIndex = mySwiper.activeIndex;
	      }
	    });
	  },
	
	
	  methods: {
	    switchLogin: function switchLogin(index) {
	      this.loginIndex = index;
	      mySwiper.slideTo(index);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
<<<<<<< HEAD
/* 39 */
=======
/* 37 */
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
/***/ function(module, exports) {

	module.exports = "\n<div class=\"phoneNubLogin_main\">\n    <img :src=\"logo\" class=\"logo\">\n    <nav>\n        <div v-for=\"nav in loginNav\" @click=\"switchLogin($index)\" :class=\"loginIndex == $index ? 'navLoginActive': ''\">\n            <span>{{nav}}</span>\n        </div>\n    </nav>\n    <div class=\"swiper-container\">\n      <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\">\n            <input type=\"text\" name=\"name\" value=\"手机号\">\n            <input type=\"text\" name=\"name\" value=\"密码\">\n          </div>\n          <div class=\"swiper-slide\">\n            <input type=\"text\" name=\"name\" value=\"手机号\">\n            <input type=\"text\" name=\"name\" value=\"验证码\">\n          </div>\n      </div>\n    </div>\n    <div class=\"phoneNubLogin_bt\">\n        <div class=\"login_button\">{{login}}</div>\n        <h3 class=\"register\"><span v-link=\"{path:registerPath}\">{{register}}</span></h3>\n        <h4 class=\"other_login\">{{other_login}}</h4>\n        <div class=\"other_login_img\">\n          <img v-for=\"tab in other\" :src=\"tab.other_login_img\" alt=\"\">\n        </div>\n    </div>\n</div>\n";

/***/ },
<<<<<<< HEAD
/* 40 */
=======
/* 38 */
>>>>>>> 881726f07fe60656c947574fa24d50fc59c60637
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = {
	  tabIndex: 0
	};
	
	var mutations = {
	  CHANGEINDEX: function CHANGEINDEX(state, curIndex) {
	    state.tabIndex = curIndex;
	  }
	};
	
	exports.default = new Vuex.Store({
	  state: state,
	  mutations: mutations
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map