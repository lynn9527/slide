<template>
    <!--出差-->
    <div class="container bussinessDays">
        <!--  <=100 出差   b-->
        <div class="main mainA">
            <div class="mainA-p1 fontW">有前进的梦想</div>
            <div class="mainA-p2 fontW">也有回家的方向</div>
            <div class="mainA-content fontW">
                <p>出差了9天</p>
                <p>去了1个城市</p>
            </div>
            <div class="mainA-footer fontW">
                <p>超过了</p>
                <p>80%</p>
                <p>的小伙伴</p>
            </div>
        </div>

        <!--  无出差   c-->

        <!--  出差大于100天-->

    </div>
</template>

<script>
    export default {
        name: 'bussinessDays',
        data(){
            return {

            }
        },
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
         @include background(url('../../assets/images/出差-小于100天.png') no-repeat);

        // position: relative;
        // width: 100%;
        // height: 100%;
    }
    .mainA {
        // background: url('../../assets/images/出差-小于100天.png') no-repeat;
        // background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        top: 190px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #0c97ff;
    }
    .mainA-p2 {
        position: absolute;
        top: 285px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #0c97ff;
    }
    .mainA-content {
        position: absolute;
        top: 355px;
        left: 85px;
        display: flex;
        flex-direction: flex-start;
        align-items: center;
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #43577c;
    }
    .mainA-footer {
        position: absolute;
        top: 402px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
    }
    .mainA-footer p:not(:nth-child(2)){
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #43577c;
    }
    .mainA-footer p:nth-child(2){
        line-height: 45px;
        text-align: center;
        font-size: 45px;
        font-weight: 600;
        color: #ffbb00;
    }
    .mainA-content p:nth-child(2){
        margin-left: 30px;
    }

</style>