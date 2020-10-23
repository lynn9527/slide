<template>
    <!--分享-->
    <div class="container sharePage">
        <!--  女生  1-->
        <div class="main mainA">
            <div class="mainA-p1">2019年度关键词</div>
            <div class="mainA-p2">社区领袖 能征敢战</div>
            <button type="default" class="main-button" @click="sharing">分享</button>
        </div>
        <!--  男生  2-->
    </div>
</template>

<script>
    export default {
        name: 'sharePage',
        data(){
            return {

            }
        },
        methods: {
            sharing(){

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
        background-size: 100% 100%;
    }
    .mainA-p1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 23px;
        font-size: 23px;
        letter-spacing: 8px;
        color: #fdcddd;
    }
    .mainA-p2 {
        position: absolute;
        top: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;/**space-evenly 兼容性差 */
        align-items: center;
        width: 100%;
        line-height: 76px;
        font-size: 76px;
        font-weight: 800;
        color: #fffbef;
    }
    /* .mainA-p2::before {
        content:'',
        display:inline;
    } */

    .main-button {
        position: absolute;
        bottom: 65px;
        left: 95px;
        width: 560px;
        height: 120px;
        box-shadow: 0 -6px 0 #e5326a;
        background: linear-gradient(to top, #ff3a5e, #ff6682);
        border: 0;
        border-radius: 60px;
        letter-spacing: 8px;
        text-align: center;
        font-weight: 600;
        font-size: 46px;
        color: #fff;
    }

</style>