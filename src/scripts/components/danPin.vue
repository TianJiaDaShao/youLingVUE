<template>
    <div class="danPin-container">
        <nav>
            <ul id="swiper-nav">
                <li v-for="nav in danPinNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
            </ul>
        </nav>
        <section>
            <div class="swiper-container" id="index-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <section id="index-scroll">
                          <div>
                            <div class="head">
                              <img v-bind:src="imgArrow" />
                              <span>下拉刷新...</span>
                            </div>
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                            <div class="foot">
                              <img v-bind:src="imgArrow" />
                              <span>上拉加载更多...</span>
                            </div>
                          </div>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll2">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll3">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll4">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll5">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll6">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll7">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll8">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="swiper-slide">
                        <section id="index-scroll9">
                            <ul>
                                <li v-for="l in danPin" v-link="{path:'/danPinDetail'}">
                                  <span>
                                    <i><img v-bind:src="l.img" alt=""></i>
                                    <b>{{l.title}}</b>
                                    <em>￥{{l.price}}</em>
                                  </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    var mySwiper = null;
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
                    danPin: [],
                    curIndex: 0,
                    danPinNav: ['最新', '内搭', '外套','裤子', '鞋', '箱包','配饰', '饰品', '其他'],
                    imgArrow: './images/arrow.png',
                }
            },
            ready: function() {
                this.change(1);
                var that = this;
                this.$http.get('/mock/danPin.json')
                    .then((res) => {
                        this.danPin = res.data.data;
                        Vue.nextTick(function() {
                          console.log(123);
                          commonUtil.isAllLoaded('#index-scroll', function() {
                            var myScroll = new IScroll('#index-scroll', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll2 = new IScroll('#index-scroll2', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll3 = new IScroll('#index-scroll3', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll4 = new IScroll('#index-scroll4', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll5 = new IScroll('#index-scroll5', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll6 = new IScroll('#index-scroll6', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll7 = new IScroll('#index-scroll7', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll8 = new IScroll('#index-scroll8', {
                              probeType: 3,
                              click: true
                            });
                            var myScroll9 = new IScroll('#index-scroll9', {
                              probeType: 3,
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
                                that.$http.get('/mock/danPin_refresh.json')
                                  .then((res) => {
                                    that.danPin = res.data.data.concat(that.danPin);
                                    myScroll.scrollTo(0, -35);
                                    head.removeClass('up');
                                    head.attr('src', './images/arrow.png');
                                    Vue.nextTick(function() {
                                      //当你的滚动区域的内容发生改变 或是 滚动区域不正确，都用通过调用refresh 来使得iscroll 重新计算滚动的区域，包括滚动条，来使得iscroll 适合当前的dom
                                      myScroll.refresh();
                                      myScroll2.refresh();
                                      myScroll3.refresh();
                                      myScroll4.refresh();
                                      myScroll5.refresh();
                                      myScroll6.refresh();
                                      myScroll7.refresh();
                                      myScroll8.refresh();
                                      myScroll9.refresh();
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
                                that.$http.get('/mock/danPin_more.json')
                                  .then((res) => {
                                    that.danPin = that.danPin.concat(res.data.data);
                                    foot.removeClass('down');
                                    foot.attr('src', './images/arrow.png');
                                    Vue.nextTick(function() {
                                      myScroll.refresh();
                                      myScroll2.refresh();
                                      myScroll3.refresh();
                                      myScroll4.refresh();
                                      myScroll5.refresh();
                                      myScroll6.refresh();
                                      myScroll7.refresh();
                                      myScroll8.refresh();
                                      myScroll9.refresh();
                                      myScroll.scrollTo(0, self.maxScrollY + 35);
                                      myScroll2.scrollTo(0, self.maxScrollY + 35);
                                      myScroll3.scrollTo(0, self.maxScrollY + 35);
                                      myScroll4.scrollTo(0, self.maxScrollY + 35);
                                      myScroll5.scrollTo(0, self.maxScrollY + 35);
                                      myScroll6.scrollTo(0, self.maxScrollY + 35);
                                      myScroll7.scrollTo(0, self.maxScrollY + 35);
                                      myScroll8.scrollTo(0, self.maxScrollY + 35);
                                      myScroll9.scrollTo(0, self.maxScrollY + 35);
                                    });
                                  });
                              }
                            });
                          });
                        });




                        // setTimeout(function() {
                        //     new IScroll('#index-scroll1',{
                        //       probeType: 3,
                        //       mouseWheel: true,
                        //       click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll2',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll3',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll4',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll5',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll6',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll7',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll8',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);
                        //
                        // setTimeout(function() {
                        //     new IScroll('#index-scroll9',{
                        //             click:true
                        //     }
                        // );
                        // }, 500);


                        mySwiper = new Swiper("#index-swiper", {
                            onSlideChangeStart: function() {
                                that.curIndex = mySwiper.activeIndex;
                            }
                        });
                    })
            },
            methods: {
                switchSwiper(index) {
                    this.curIndex = index;
                    mySwiper.slideTo(index);
                }
            }
    }
</script>
