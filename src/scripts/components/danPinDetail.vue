<template>
  <img class="img" v-link="{path:'/index/danPin'}" src="/images/md_nav_back.png" alt="">
  <div class="danPinD-container">
      <div  id="index-scroll">
        <ul>
          <li v-for="l in danPin">
            <span>
              <i><img v-bind:src="l.img" alt=""></i>
              <b>{{l.title}}</b>
              <em>￥{{l.price}}</em>
            </span>
          </li>
      </ul>
      </div>
  </div>
</template>

<script>
    var mySwiper = null;
    export default {
        data() {
          return {
            danPin: []
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
              });
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
