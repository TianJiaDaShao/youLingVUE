<template>
    <div class="gesture">
        <header>
            涨姿势
        </header>
        <section id="index-scroll">
            <ul>

                <li v-for="l in list" >
                    <img v-bind:src="l.img" v-link="{path:'/zhangdetail'}">
                    <i v-link="{path:'/zhangdetail'}">{{l.title}}</i>
                    <p>{{l.detail}}</p>
                    <b class="b1"><span>涨姿势</span><span>{{l.type}}</span></b>
                    <b class="b2"><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">{{l.num}}</span><span>{{l.time}}</span></b>
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
            }
    }
</script>
