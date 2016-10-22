<template>
    <div class="gesture">
        <section id="index-scroll">
            <ul>
                <li v-for="l in list" v-link="{name:'detail',params:{id:l.id}}" @click="clc">
                    <img v-bind:src="l.img" alt="">
                    <i>{{l.title}}</i>
                    <p>{{l.detail}}</p>
                    <b><span>涨姿势</span><span>{{l.type}}</span></b>
                    <b><span>作者：领哥</span><span><img src="./images/md_view_xs.png" alt="">{{l.num}}</span><span>{{l.time}}</span></b>
                </li>
            </ul>
        </section>
    </div>
</template>
