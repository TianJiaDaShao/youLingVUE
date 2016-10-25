<template>
    <div class="phoneNubLogin_main">
        <img :src="logo" class="logo">
        <nav>
            <span></span>
        </nav>
    </div>
</template>

<script>
    export default{
      data(){
        return{
          logo:'/images/md_logo.png'
        }
      },

      methods:{
        changLogin(i){
          this.index=i;
        }
      }
    }
</script>
