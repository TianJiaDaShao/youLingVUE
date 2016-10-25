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
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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
                        <section id="index-scroll">
                            <ul>
                                <li v-for="l in danPin">
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

    export default {
        data() {
                return {
                    danPin: [],
                    curIndex: 0,
                    danPinNav: ['最新', '内搭', '外套','裤子', '鞋', '箱包','配饰', '饰品', '其他']
                }
            },
            ready: function() {
                var that = this;
                this.$http.get('/mock/danPin.json')
                    .then((res) => {
                        this.danPin = res.data.data;

                        setTimeout(function() {
                            new IScroll('#index-scroll',{
                                    click:true
                            }
                        );
                        }, 500);

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
