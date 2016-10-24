<template>
    <div class="gesture_detail">
        <header>
            <div>
                <div>
                    <img v-link="{path:'/index/zhangZiShi'}" src="/images/md_nav_back.png" alt="">
                    <p>有领资讯</p>
                </div>
                <img src="/images/md_share.png" @click="showShare" alt="">
            </div>
        </header>
        <div id="share">
            <p class="sharetop"><img src="/images/com_taobao_tae_sdk_web_view_title_bar_close.9.png" alt="">&nbsp;&nbsp;分享</p>
            <ul>
                <li><img src="/images/md_share_wechat.png" alt="">
                    <p>微信好友</p>
                </li>
                <li><img src="/images/md_share_moments.png" alt="">
                    <p>微信朋友圈</p>
                </li>
                <li><img src="/images/md_share_weibo.png" alt="">
                    <p>新浪微博</p>
                </li>
            </ul>
            <ul>
                <li><img src="/images/md_share_qq.png" alt="">
                    <p>QQ好友</p>
                </li>
                <li><img src="/images/md_share_copylink.png" alt="">
                    <p>复制链接</p>
                </li>
            </ul>
        </div>
        <section id="index-scroll">
            <div>
                <div class="top" v-for="l in list">
                    <i>{{l.title}}</i>
                    <b class="b1"><span>涨姿势</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{l.type}}</span></b>
                    <b class="b2"><span>作者：领哥</span><span><img src="/images/md_view_xs.png" alt="">&nbsp;&nbsp;{{l.num}}</span><span>{{l.time}}</span></b>
                </div>
                <div class="detail">
                    <p>关于肤色这个问题，选择衣服颜色时的搭配就会显得尤为重要，无论是肤色黑的还是白的都会有一定的烦恼。</p>
                    <p>因此小编这期打算说一下肤色偏白的人更适合怎样的色调？</p>
                    <p>How to choose? 肤色偏白虽然会比肤色偏黑的男生多了很多选择，但有时候反而是太多却不知道怎样去挑选。</p>
                    <img src="/images/fd40bc766771c3be80fb085666c259d1.jpg" alt="">
                    <p>因此可能很多肤色白的男生始终坚持黑白灰三个基本色，而事实上你可以大胆去尝试其他色系，基本都不会有问题。<b>肤色白的人对跳跃性的颜色会有很好的掌控能力，</b>很多时候都能穿出属于自己的风格。</p>
                    <img src="/images/58b93e6ffcc4c149c9bb35a104f0058c.jpg" alt="">
                    <p>首选说一下经典的军绿色，肤色白的人会很好地映衬出这件颜色的特别之处，而肤色偏黑的人穿上去则会显得脏脏的。冬天则外搭一件白色或者黑色的夹克，满满的学院风，瞬间都青春了好几岁。</p>
                    <img src="/images/a88adaabfb5817ffd6b14b9f87e6ab54.jpg" alt="">
                    <p><b>对于肤色白的男生来说，浅色系单品真的很上镜。</b>类似浅灰，浅蓝，水洗白这种色调，都可以考虑入手，因为会显得你既大方同时又带给别人一种很舒适的感觉。</p>
                    <img src="/images/7e241f1a66f8a54b50e388d24b07bd21.jpg" alt="">
                    <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
                    <img src="/images/70069d5e28f79522d53524364feedd35.jpg" alt="">
                    <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
                    <img src="/images/012b39c1b01ea2aa417618681e43e46a.jpg" alt="">
                    <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
                    <img src="/images/b31b88045b0127b37b2b8a05a57967fa.jpg" alt="">
                    <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
                    <img src="/images/b3aebe2378f76854d04257037929acbd (1).jpg" alt="">
                    <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
                    <img src="/images/c9129ab3dd9fc1a26a64a9aa73eacbdb.jpg" alt="">
                    <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
                    <img src="/images/aaf479700527dc092535b7d9b84a2fb7.jpg" alt="">
                    <p>有一种颜色，真的是只适合肤色白的人穿，肤色黑的想都别想....这个颜色就是类似这样的藕色，肤色白的穿了就全都是各种显气质，肤色黑的，就呵呵呵了。</p>
                </div>
            </div>
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
                this.$http.get('/mock/zhangZiShi.json')
                    .then((res) => {
                        this.list.push(res.data.data[0]); //对象转换为数组
                        console.log(this.list);
                        setTimeout(function() {
                            new IScroll('#index-scroll');
                        }, 500);
                    })
            },
            methods: {
                showShare() {
                    document.getElementById("share").display="none"
                }
            }
    }
</script>
