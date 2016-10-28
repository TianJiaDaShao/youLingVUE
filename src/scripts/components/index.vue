<template>
    <div class="index-container">
      <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
          <li :class="curIndex == $index ? 'active' : ''"
              v-for="tab in tablist"
              v-link="{path:tab.path}"
          >
            <img v-if="curIndex == $index" :src="tab.activeIcon">
            <img v-else :src="tab.icon">
            <b>{{tab.name}}</b>
          </li>
        </ul>
    </footer>
</template>

<script>
  import {changeIndex} from '../vuex/actions';
  import {getIndex} from '../vuex/getters';
  export default{
    vuex: {
      getters: {
        curIndex:getIndex
      },
      actions: {
        change: changeIndex
      }
    },
    data(){
      return {
        tablist:[
          {path:'/index/',icon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_featured.png',acticeIcon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_featured_on.png',name:'推荐'},
          {path:'/index/danPin',icon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_singleitem.png',activeIcon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_singleitem_on.png',name:'单品'},
          {path:'/index/zhangZiShi',icon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_aritcles.png',activeIcon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_aritcles_on.png',name:'涨姿势'},
          {path:'/mine',icon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_mine.png',activeIcon:'http://ofot6413t.bkt.clouddn.com/md_tabbar_mine_on.png',name:'我的'}
        ]
      }
    }
  }
</script>
