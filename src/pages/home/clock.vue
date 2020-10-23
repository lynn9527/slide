<template>
    <!--打卡-->
    <div class="container clock">
        <!--  大于等于19：00，小于21：00   c-->

        <!--  小于等于19：00  d-->
        <div class="main mainB">
            <div class="mainB-p1 fontW">
                <p>生活</p>
                <p>从不亏待</p>
            </div>
            <div class="mainB-p2 fontW">每一个努力向上的人</div>
            <div class="mainB-footer">
                <p>经常在17：30-19：00离开公司</p>
            </div>
        </div>

        <!--  21：00以后到凌晨5点   a-->

    </div>
</template>

<script>
    export default {
        name: 'clock',
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
        @include background(url('../../assets/images/打卡5-7点.png') no-repeat);

        // position: relative;
        // width: 100%;
        // height: 100%;
    }
    .mainB {
        // background: url('../../assets/images/打卡5-7点.png') no-repeat;
        // background-size: 100% 100%;
    }
    .mainB-p1 {
        position: absolute;
        top: 260px;
        left: 84px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #e1512e;
    }
    .mainB-p1 p {
        margin: 0;
    }
    .mainB-p1 p:nth-child(2){
        margin-left: 30px;
    }
    .mainB-p2 {
        position: absolute;
        top: 350px;
        left: 84px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #e1512e;
    }
    .mainB-footer {
        position: absolute;
        top: 430px;
        left: 90px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        line-height: 33px;
        font-size: 33px;
        color: #551c08;
    }

</style>