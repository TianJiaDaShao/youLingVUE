<template>
  <div>
    <div class="index-container">
      <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
          <li :class="cur == $index ? 'active' : ''"
              @click="changPage($index)"
              v-for="tab in tablist"
              v-link="{path:tab.path}"
          >
            <img v-if="cur == $index" :src="tab.activeIcon">
            <img v-else :src="tab.icon">
            <b>{{tab.name}}</b>
          </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        cur:0,
        tablist:[
          {path:'/',icon:'./images/tuiJian.png',acticeIcon:'./images/tuiJian-active.png',name:'推荐'},
          {path:'/danPin',icon:'./images/danPin.png',activeIcon:'./images/danPin-active.png',name:'单品'},
          {path:'/zhangZiShi',icon:'./images/zhangZiShi.png',activeIcon:'./images/zhangZiShi-active.png',name:'涨姿势'},
          {path:'/mine',icon:'./images/mine.png',activeIcon:'',name:'我的'}
        ]
      }
    },

    methods:{
      changPage(i){
        this.cur=i;
      }
    }
  }
</script>
