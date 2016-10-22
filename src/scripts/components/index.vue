<template>
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
</template>

<script>
  export default{
    data(){
      return {
        cur:0,
        tablist:[
          {path:'/index/',icon:'./images/md_tabbar_featured.png',acticeIcon:'./images/md_tabbar_featured_on.png',name:'推荐'},
          {path:'/index/danPin',icon:'./images/md_tabbar_singleitem.png',activeIcon:'./images/md_tabbar_singleitem_on.png',name:'单品'},
          {path:'/index/zhangZiShi',icon:'./images/md_tabbar_aritcles.png',activeIcon:'./images/md_tabbar_aritcles_on.png',name:'涨姿势'},
          {path:'/mine',icon:'./images/md_tabbar_mine.png',activeIcon:'md_tabbar_mine_on.png',name:'我的'}
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
