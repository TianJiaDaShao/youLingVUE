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
    export default {

        data() {
                return {
                    list: []
                }
            },
            ready: function() {
                var that = this;
                this.$http.get('/mock/tuiJian.json')
                    .then((res) => {
                        console.log(res.data.data.length);
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
