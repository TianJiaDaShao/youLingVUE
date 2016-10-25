<template>
    <div class="tuijian-box">
        <header>
            我的推荐
        </header>
        <section id="index-scroll">
            <ul>
                <li v-for="l in list" @click="clc" v-link="{path:'/tuiJianDetail'}" >
                  <div class="shops">
                    <img v-for="limg in l.shops" v-bind:src="limg.img" >
                  </div>
                  <div class="avatar">
                    <img  v-bind:src="l.avatar_img" alt="">
                    <i>{{l.avatar_name}}</i>
                  </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    import {changeIndex} from "../vuex/actions";
    export default {
        vuex: {
          actions: {
            change: changeIndex
          }
        },
        data() {
                return {
                    list: []
                }
            },
            ready: function() {
                this.change(0);
                var that = this;
                this.$http.get('/mock/tuiJian.json')
                    .then((res) => {
                        this.list = res.data.data;
                        setTimeout(function() {
                            new IScroll('#index-scroll', {
                              click:true
                            });
                        }, 500);
                    })
            },
            methods:{
                clc(){
                    console.log(1)
                }
            }
    }
</script>
