<template>
    <div class="phoneNubLogin_main">
        <img :src="logo" class="logo">
        <nav>
            <div v-for="nav in loginNav" @click="switchLogin($index)" :class="LoginIndex == $index ? 'navLoginActive': ''">
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
                <input type="text" name="name" value="密码132">
              </div>
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
          LoginIndex:'0',
          loginNav:['密码登录',"验证码登录"]
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
          this.LoginIndex = index;
          mySwiper.slideTo(index);
        }
      }
    }
</script>
