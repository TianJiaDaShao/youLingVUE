<template>
    <div class="phoneNubLogin_main">
        <img :src="logo" class="logo">
        <nav>
            <div v-for="nav in loginNav" @click="switchLogin($index)" :class="LoginIndex == $index ? 'navLoginActive': ''">
                <span>{{nav}}</span>
            </div>
        </nav>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <input type="text" name="name" value="手机号">
              <input type="text" name="name" value="密码">
            </div>
            <div class="swiper-slide">
              <input type="text" name="name" value="手机号">
              <input type="text" name="name" value="密码1">
            </div>
        </div>
    </div>
</template>

<script>
    var mySwiper = new Swiper('swiper-wrapper');
    export default{
      data(){
        return{
          logo:'/images/md_logo.png',
          LoginIndex:'0',
          loginNav:['密码登录',"验证码登录"]
        }
      },

      ready(){

      },

      methods:{
        switchLogin(index){
          this.LoginIndex = index;
          mySwiper.slideTo(index);
        }
      }
    }
</script>
