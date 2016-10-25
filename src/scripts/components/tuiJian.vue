<template>
  <div class="tuijian-box">
    <h1 class="hhh">
      我的推荐
    </h1>
    <section id="index-scroll">
      <div>
        <div class="head">
          <img v-bind:src="imgArrow" />
          <span>下拉刷新...</span>
        </div>
        <ul>
          <li v-for="l in list" @click="clc" v-link="{path:'/tuiJianDetail'}">
            <div class="shops">
              <img v-for="limg in l.shops" v-bind:src="limg.img">
            </div>
            <div class="avatar">
              <img v-bind:src="l.avatar_img" alt="">
              <i>{{l.avatar_name}}</i>
            </div>
          </li>
        </ul>
        <div class="foot">
          <img v-bind:src="imgArrow" />
          <span>上拉加载更多...</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import commonUtil from "../utils/commonUtils";
  import {changeIndex} from "../vuex/actions";
  export default {
      vuex: {
        actions: {
          change: changeIndex
        }
      },
    data() {
        return {
          list: [],
          imgArrow: './images/arrow.png',
        }
      },
      ready: function() {
        this.change(0);
        var that = this;
        this.$http.get('/mock/tuiJian.json')
          .then((res) => {
            console.log(res.data.data.length);
            this.list = res.data.data;
            // DOM 更新后，图片加载完 实例化 IScroll
            Vue.nextTick(function() {
              commonUtil.isAllLoaded('#index-scroll', function() {
                var myScroll = new IScroll('#index-scroll', {
                  probeType: 3,
                  mouseWheel: true,
                  click: true
                });

                myScroll.scrollTo(0, -35);

                var head = $('.head img'),
                  topImgHasClass = head.hasClass('up');
                var foot = $('.foot img'),
                  bottomImgHasClass = head.hasClass('down');

                myScroll.on('scroll', function() {
                  var y = this.y,
                    maxY = this.maxScrollY - y;
                  if (y >= 0) {
                    !topImgHasClass && head.addClass('up');
                    return '';
                  }
                  if (maxY >= 0) {
                    !bottomImgHasClass && foot.addClass('down');
                    return '';
                  }
                });

                myScroll.on('scrollEnd', function() {
                  if (this.y >= -35 && this.y < 0) {
                    myScroll.scrollTo(0, -35);
                    head.removeClass('up');
                  } else if (this.y >= 0) {
                    head.attr('src', './images/ajax-loader.gif');

                    // ajax下拉刷新数据
                    that.$http.get('/mock/tuiJian_refresh.json')
                      .then((res) => {
                        that.list = res.data.data.concat(that.list);
                        myScroll.scrollTo(0, -35);
                        head.removeClass('up');
                        head.attr('src', './images/arrow.png');
                        Vue.nextTick(function() {
                          //当你的滚动区域的内容发生改变 或是 滚动区域不正确，都用通过调用refresh 来使得iscroll 重新计算滚动的区域，包括滚动条，来使得iscroll 适合当前的dom
                          myScroll.refresh();
                        });
                      })
                  }

                  var self = this;
                  var maxY = this.maxScrollY - this.y;
                  if (maxY > -35 && maxY < 0) {
                    myScroll.scrollTo(0, self.maxScrollY + 35);
                    foot.removeClass('down')
                  } else if (maxY >= 0) {
                    foot.attr('src', './images/ajax-loader.gif');
                    //ajax上拉加载数据
                    that.$http.get('/mock/tuiJian_more.json')
                      .then((res) => {
                        that.list = that.list.concat(res.data.data);
                        foot.removeClass('down');
                        foot.attr('src', './images/arrow.png');
                        Vue.nextTick(function() {
                          myScroll.refresh();
                          myScroll.scrollTo(0, self.maxScrollY + 35);
                        });
                      });
                  }
                });
              });
            });
          })
      },
      methods: {
        clc() {
          console.log(1)
        }
      }
  }
</script>
