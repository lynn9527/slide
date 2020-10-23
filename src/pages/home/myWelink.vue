<template>
    <!--  标签页  -->
    <div class="container myWelink">
        <div class="main mainA">
            <div class="mainA-p1">黄飞鸿的2019年度关键词</div>
            <div class="mainA-p2">社区领袖 能征敢战</div>
            <button class="main-button" @click='onClick'>看看我的2019</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'myWelink',
        data(){
            return {

            }
        },
        methods: {
            onClick(){

            }
        }
    }
</script>

<style scoped lang='scss'>
    .container {
        width: 100%;
        height: 100%;
    }
    .main {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .mainA {
        background: url('../../assets/images/分享-女.png') no-repeat;
          /* background: url('../../assets/images/分享-男.png') no-repeat; */
        background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        top: 6px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 23px;
        text-align: 23px;
        font-size: 23px;
        width: 100%;
        letter-spacing: 3px;
        color: #fdcddd;
    }
    .mainA-p2 {
        position: absolute;
        top: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:100%;
        line-height: 76px;
        font-weight: 800;
        font-size: 76px;
        color: #fffbef;
    }
    .main-button {
        position: absolute;
        bottom: 49px;
        left: 95px;
        width: 560px;
        height: 120px;
        text-align: center;
        border: 0;
        box-shadow: 0 -6px 0 #e5326a;
        border-radius: 60px;
        background: linear-gradient(to top, #ff3a5e, #ff6682);
        color: #fff;
    }

</style>