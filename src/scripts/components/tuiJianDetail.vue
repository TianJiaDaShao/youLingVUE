<template>
  <div class="tuijian-detail">
    <header>
      <ul>
        <li v-link="{path: '/index'}">返回</li>
        <li class="title">
          {{{detailInfo.title}}}
        </li>
        <li class="iconfont">&#xe684;</li>
      </ul>
    </header>
    <article id="content" v-scroll="artId">
      <div>
        {{{detailInfo.content}}}
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        detailInfo: {},
        artId: ''
      }
    },

    ready() {
      var that = this;
      this.$http.get('/mock/tuiJian_detail.json')
        .then((res) => {
          res.data.data.forEach(({id, title, content}) => {
            if(id == this.$route.params.id) {
              that.detailInfo = {title: title, content:content};
              Vue.nextTick(function(){
                // console.log(that.artId);
              that.artId = "#content";
                // var myScroll12 = new IScroll('#content', {
                //   mouseWheel: true,
                //   click: true
                // });
                console.log('dom更新了');
              });
              return;
            }
          })
        });
    },
  }
</script>
