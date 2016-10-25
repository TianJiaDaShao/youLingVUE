<template>
    <div class="gesture">
        <header>
            涨姿势
        </header>
        <section id="index-scroll">
            <ul>
                <li v-for="l in list" @click="clc" v-link="{path:'/zhangdetail'}">
                    <img v-bind:src="l.img" alt="">
                    <i>{{l.title}}</i>
                    <p>{{l.detail}}</p>
                    <b><span>涨姿势</span><span>{{l.type}}</span></b>
                    <b><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">{{l.num}}</span><span>{{l.time}}</span></b>
                    <p>{{l.det}}</p>
                    <b class="b1"><span>涨姿势</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{l.type}}</span></b>
                    <b class="b2"><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">&nbsp;&nbsp;{{l.num}}</span><span>{{l.time}}</span></b>
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
                this.change(2);
                var that = this;
                this.$http.get('/mock/zhangZiShi.json')
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

                }
            }
    }
</script>
