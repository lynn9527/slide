<template>
    <!--出勤-->
    <div class="container workDaysPer">
        <!--出勤率非100%-->
        <div class="main mainA">
            <div class="mainA-p1 fontW">一份耕耘</div>
            <div class="mainA-p2 fontW">就有一份收获</div>
            <div class="mainA-p3">
                <p>出勤率</p>
                <p>97%</p>
                <p>加油！</p>
            </div>
        </div>

        <!--出勤率100%-->

    </div>
</template>

<script>
    export default {
        name: 'workDaysPer',
        data(){
            return {

            }
        },
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
        background: url('../../assets/images/出勤非100.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        bottom: 413px;
        left: 79px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 55px;
        font-weight: 600;
        font-size: 55px;
        color: #ff6501;
    }
    .mainA-p2 {
        position: absolute;
        bottom: 323px;
        left: 79px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 55px;
        font-weight: 600px;
        font-size: 55px;
        color: #ff6501;
    }
     .mainA-p3 {
        position: absolute;
        bottom: 185px;
        left: 79px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        line-height: 33px;
        font-size: 33px;
        color: #ff6501;
    }
    .mainA-p3 p:not(:nth-child(2)){
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #44567c;
    }
    .mainA-p3 > p:nth-child(2){
        line-height: 45px;
        text-align: center;
        margin-right: 30px;
        font-weight: bold;
        font-size: 45px;
        color: #fdd164;

    }

</style>