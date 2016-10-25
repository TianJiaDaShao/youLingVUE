<template>
    <div class="mine_container">
        <img :src="Xurl" class="Xurl" onclick="window.history.go(-1)">
        <router-view></router-view>
    </div>
</template>

<script>
    import {changeIndex} from "../vuex/actions";
    export default {
        vuex: {
          actions: {
            change: changeIndex
          }
        },
      data(){
        return{
          Xurl:'/images/md_nav_close_white.png'
        }
      },
      ready: function() {
          this.change(3);
      }
    }
</script>
