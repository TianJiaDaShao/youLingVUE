<template>
    <div class="mine_container">
        <img :src="Xurl" class="Xurl" onclick="window.history.go(-1)">
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
      data(){
        return{
          Xurl:'/images/md_nav_close_white.png'
        }
      }
    }
</script>
