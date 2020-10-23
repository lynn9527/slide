<template>
    <div class="container">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>


    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant';

    Vue.use(Swipe).use(SwipeItem);


    export default {
        name: 'home',
        data(){
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
               
               
               
            };
        },
        created() {
            
        },
        mounted() {
            
           
        },
        methods:{
            
    

        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 750px;
        height: 1334px;
        margin: 0 auto;
        background: #fff;
        img {
            width: 300px;
            height: 300px;
        }
   


    }
   

  
   
</style>
