<template>
    <div class="container">
        <div class="main">
            <van-button type="default" @click='sendMsgToParent'>回归我的<span>2019</span></van-button>
            <p>数据截至道2019年12月31日，该结果不作为工作考核的依据</p>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button, Toast } from 'vant';

    Vue.use(Button).use(Toast);


    export default {
        name: 'AfirstPage',
        data(){
            return {

            }
        },
        methods:{
            sendMsgToParent(){
                this.$emit('parentChild', 1000);
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../assets/sass/base/_base';
    // .container {
    //     @include container;

    //     // width: 100%;
    //     // height: 100%;
    // }
    .main {
        @include background(url('../../assets/images/封面.png') no-repeat);
        
        // position: relative;
        // width: 100%;
        // height: 100%;
        // background: url('../../assets/images/封面.png') no-repeat;
        // background-size: 100% 100%;
    }
    .main p {
        position: absolute;
        bottom: 30px;
        left: 50%;
        margin-left: -315px;
        line-height: 24px;
        text-align: center;
        font-size: 24px;
        color: #8cbfff;
    }
    >>> .van-button {
        position: absolute;
        bottom: 145px;
        left: 100px;
        width:560px;
        height: 120px;
        letter-spacing: 5px;
        font-weight: bold;
        text-align: center;
        border: 0;
        border-radius:60px;
        box-shadow: 0 -8px 0 1px #e68a01;
        background: linear-gradient(to top,#ffb41d, #ffda7f);
        font-size: 45px;
        color:white;
    }
    >>> .van-button > span {
        letter-spacing: 3px;
    }
    

</style>