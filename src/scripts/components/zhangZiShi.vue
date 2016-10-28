<template>
    <div class="gesture">
        <header>
            涨姿势
        </header>
        <section id="zhangZiShi-scroll">
            <ul>

                <li v-for="l in list">
                    <img v-bind:src="l.img" v-link="{path:'/zhangdetail'}">
                    <i v-link="{path:'/zhangdetail'}">{{l.title}}</i>
                    <p>{{l.detail}}</p>
                    <b class="b1"><span>涨姿势</span><span>{{l.type}}</span></b>
                    <b class="b2"><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">{{l.num}}</span><span>{{l.time}}</span></b>
                </li>
                <div class="foot">
                    <img v-bind:src="imgArrow" />
                    <span>上拉加载更多...</span>
                </div>
            </ul>
        </section>
    </div>
</template>
<script>
    import {
        changeIndex
    } from "../vuex/actions";
    import commonUtil from "../utils/commonUtils";

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
            this.change(2);
            var that = this;
            this.$http.get('/mock/zhangZiShi.json')
                .then((res) => {
                    this.list = res.data.data;

                    Vue.nextTick(function() {
                        commonUtil.isAllLoaded('#zhangZiShi-scroll', function() {
                            var myScroll = new IScroll('#zhangZiShi-scroll', {
                                probeType: 3,
                                click: true
                            });


                            var foot = $('.foot img'),
                                bottomImgHasClass = foot.hasClass('down');

                            myScroll.on('scroll', function() {
                                var y = this.y,
                                    maxY = this.maxScrollY - y;

                                if (maxY >= 0) {
                                    !bottomImgHasClass && foot.addClass('down');
                                    return '';
                                }
                            });

                            myScroll.on('scrollEnd', function() {
                             if (this.y >= 0) {
                                    foot.attr('src', './images/ajax-loader.gif');
                                }

                                var self = this;
                                var maxY = this.maxScrollY - this.y;
                                if (maxY > -35 && maxY < 0) {
                                    myScroll.scrollTo(0, self.maxScrollY + 35);
                                    foot.removeClass('down')
                                } else if (maxY >= 0) {
                                    foot.attr('src', './images/ajax-loader.gif');
                                    //ajax上拉加载数据
                                    that.$http.get('/mock/zhangZiShimore.json')
                                        .then((res) => {
                                            that.list = that.list.concat(res.data.data);
                                            foot.removeClass('down');
                                            foot.attr('src', './images/arrow.png');
                                            Vue.nextTick(function() {
                                                myScroll.scrollTo(0, self.maxScrollY + 35);
                                                myScroll.refresh();
                                            });
                                        });
                                }
                            });
                        });
                    });





                })
        }









    }
</script>
