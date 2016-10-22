<template>
    <img :src="imgurl" alt="" id="firstPage_imgurl">
</template>

<script>
    export default{
      data(){
        return{
          imgurl:'./images/md_splash.jpg'
        }
      },
      methods:{
          ready:function(){
              setTimeOut(function(){
                  
              },1000)
          }
      }
    }
</script>
