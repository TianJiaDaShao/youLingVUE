<template>
    <div class="mine_container">
        <img :src="Xurl" class="Xurl" onclick="window.history.go(-1)">
        <div class="mine_main">
            <img :src="logo" class="logo">
            <h3 class="mine_label"><span>{{label}}</span></h3>
            <input type="text" name="phone" value="">
            <div class="mine_bottom"></div>
            <div class="mine_register">{{register}}</div>
            <h3 class="phone_login"><span>{{phone_login}}</span></h3>
            <h4 class="other_login">{{other_login}}</h4>
            <div class="other_login_img">
              <img v-for="tab in other" :src="tab.other_login_img" alt="">
            </div>
            <h4 class="xieyi">
              {{tongyi}}
              <span>{{xieyi}}</span>
            </h4>
        </div>
    </div>
</template>

<script>
    export default{
      data(){
        return{
          Xurl:'/images/md_nav_close_white.png',
          logo:'/images/md_logo.png',
          label:'手机号',
          register:'注册',
          phone_login:'手机号登录',
          other_login:'其他登录方式',
          other:[
            {other_login_img:'/images/btn_login_wechat_n.png'},
            {other_login_img:'/images/btn_login_taobao_n.png'},
            {other_login_img:'/images/btn_login_weibo_n.png'}
          ],
          tongyi:'注册代表同意',
          xieyi:'用户协议'
        }
      }
    }
</script>
