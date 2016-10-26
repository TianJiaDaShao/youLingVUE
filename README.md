#uullnn

##1.技术选型

前端工程化环境：webpack

前端架构：Vue

UI框架：YO

插件：Swiper,iScroll,Vue-resource,Vue-router，Vuex

##2.路由设置

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
	
	    '/zhangdetail': {
	        component: zhangdetail
	    },
	    '/tuiJianDetail': {
	        component: tuiJianDetail
	    }
	
	});

##3.任务分工

田野（组长）：

架构选型，路由及VueX编写，mine页面编写，git多人迭代开发冲突管理

种奔奔（项目经理）：

推荐页编写，推荐详情页编写

杨倩倩：

单品页编写，单品详情页编写

王正琛：

涨姿势页编写，涨姿势详情页编写