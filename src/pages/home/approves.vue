<template>
    <!--审批-->
    <div class="container approves">
        <!--审批大于500条   a-->
        <div class="main mainA">
            <div class="mainA-p1 fontW">处理流程时间的总和</div>
            <div class="mainA-p2 fontW">
                <p>可以坐飞机绕赤道</p>
                <p>3圈</p>
            </div>
            <div class="mainA-footer">
                <p>全年处理了</p>
                <p>9条</p>
                <p>流程</p>
            </div>
        </div>

        <!--审批小于500条   b-->

    </div>
</template>

<script>
    export default {
        name: 'approves',
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
        @include background(url('../../assets/images/审批-大于5000条.png') no-repeat);

        // position: relative;
        // width: 100%;
        // height: 100%;
    }
    .mainA {
        // background: url('../../assets/images/审批-大于5000条.png') no-repeat;
        // background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        top: 196px;
        left: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #fff;
    }
    .mainA-p2 {
        position: absolute;
        top: 310px;
        left: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #fff;
    }
    .mainA-footer {
        position: absolute;
        top: 400px;
        left: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
    }
    .mainA-footer p:not(:nth-child(2)){
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #fff;
    }
    .mainA-footer p:nth-child(2){
        line-height: 45px;
        text-align: center;
        font-weight: bold;
        font-size: 45px;
        color: #ffbb00;
    }
    .mainA-p2 p, .mainA-footer p {
        margin: 0;
    }
    

</style>