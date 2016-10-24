<template>
    <div class="tuijian-box">
        <header>
            我的推荐
        </header>
        <section id="index-scroll">
            <ul>
                <li v-for="l in list" @click="clc">
                    <img v-bind:src="l.img" alt="">
                    <i>{{l.title}}</i>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    var Vue = require('../libs/vue.js');
    var VueResource = require('../libs/vue-resource.js');
    Vue.use(VueResource);

    export default {

        data() {
                return {
                    list: []
                }
            },
            ready: function() {
                var that = this;
                this.$http.get('/mock/tuijian.json')
                    .then((res) => {
                        console.log(res.data.data);
                        this.list = res.data.data;
                        setTimeout(function() {
                            new IScroll('#index-scroll', {
                                true
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
