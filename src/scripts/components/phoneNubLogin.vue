<template>
    <div class="phoneNubLogin_main">
        <img :src="logo" class="logo">
        <nav>
            <div v-for="nav in loginNav" @click="switchLogin($index)" :class="loginIndex == $index ? 'navLoginActive': ''">
                <span>{{nav}}</span>
            </div>
        </nav>
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <input type="text" name="name" value="手机号">
                <input type="text" name="name" value="密码">
              </div>
              <div class="swiper-slide">
                <input type="text" name="name" value="手机号">
                <input type="text" name="name" value="验证码">
              </div>
          </div>
        </div>
        <div class="phoneNubLogin_bt">
            <div class="login_button">{{login}}</div>
            <h3 class="register"><span v-link="{path:registerPath}">{{register}}</span></h3>
            <h4 class="other_login">{{other_login}}</h4>
            <div class="other_login_img">
              <img v-for="tab in other" :src="tab.other_login_img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    var mySwiper = null;
    export default{
      data(){
        return{
          logo:'/images/md_logo.png',
          loginIndex:'0',
          login:'登录',
          register:'注册',
          other_login:'其他登录方式',
          other:[
            {other_login_img:'http://ofot6413t.bkt.clouddn.com/btn_login_wechat_n.png'},
            {other_login_img:'http://ofot6413t.bkt.clouddn.com/btn_login_taobao_n.png'},
            {other_login_img:'http://ofot6413t.bkt.clouddn.com/btn_login_weibo_n.png'}
          ],
          loginNav:['密码登录',"验证码登录"],
          registerPath:'./'
        }
      },

      ready(){
        var that = this;
        mySwiper = new Swiper(".swiper-container", {
            onSlideChangeStart: function(){
              that.loginIndex = mySwiper.activeIndex;
            }
          });
      },

      methods:{
        switchLogin(index){
          this.loginIndex = index;
          mySwiper.slideTo(index);
        }
      }
    }
</script>
