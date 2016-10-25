<template>
    <div class="danPin-container">
        <section>
            <div class="swiper-container" id="index-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <section>
                        <img v-bind:src="" alt="">
                        <img v-bind:src="" alt="">
                      </section>
                    </div>
                    <div class="swiper-slide">
                      <section>
                        <img v-bind:src="" alt="">
                        <img v-bind:src="" alt="">
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
