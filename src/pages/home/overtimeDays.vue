<template>
    <!--加班-->
    <div class="container overtimeDays">
        <!--  >0  <=30天  b-->
        <div class="main mainA">
            <div class="mainA-p1 fontW">虽然有一点辛苦</div>
            <div class="mainA-p2 fontW">但离梦想又近了一些</div>
            <div class="mainA-footer">
                <p>周末加班天数超过了</p>
                <p>90%</p>
                <p>的小伙伴</p>
            </div>

        </div>

        <!--  无加班  c-->

        <!--  >=30天  a-->
        <!-- <div class="main mainC">
            <div class="mainC-p1 fontW">努力工作的同时</div>
            <div class="mainC-p2 fontW">也要好好照顾自己</div>
            <div class="mainC-footer">
                <p>周末加班天数大于</p>
                <p>80%</p>
                <p>的小伙伴</p>
            </div>

        </div> -->


    </div>
</template>

<script>
    export default {
        name: 'overtimeDays',
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
        background: url('../../assets/images/加班小于30天.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        bottom: 417px;
        left: 58px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #ff6600;
    }
    .mainA-p2 {
        position: absolute;
        bottom: 328px;
        left: 58px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #ff6600;
    }
    .mainA-footer {
        position: absolute;
        bottom: 231px;
        left: 58px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
   
    }
    .mainA-footer p:not(:nth-child(2)){
        line-height: 33px;
        font-size: 33px;
        color: #44577f;
    }
    .mainA-footer p:nth-child(2){
        line-height: 48px;
        font-size: 48px;
        color: #ffb900;
    }
    .mainC {
        background: url('../../assets/images/加班-大于30天.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainC-p1 {
        position: absolute;
        top: 110px;
        left: 58px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #fff;
    }
    .mainC-p2 {
        position: absolute;
        top: 200px;
        left: 58px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #fff;
    }
    .mainC-footer {
        position: absolute;
        top: 315px;
        left: 58px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
   
    }
    .mainC-footer p:not(:nth-child(2)){
        line-height: 33px;
        font-size: 33px;
        color: #dbd6ff;
    }
    .mainC-footer p:nth-child(2){
        line-height: 48px;
        font-size: 48px;
        color: #ffbb00;
    }
    .mainA-footer p, .mainC-footer p{
        margin: 0;
    }

</style>