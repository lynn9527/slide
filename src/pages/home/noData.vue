<template>
    <div class="container noData">
        <div class="main mainA">
            <div class="mainA-p1 fontW animated fadeInUp">
                没有采集到您的相关数据
            </div>
            <div class="mainA-p2 fontW animated fadeInUp">
                <p>期待2020年我们一起并肩</p>
                <p>风雨同行</p>
            </div>
            <div class="mainA-footer">
                如有疑问请联系welink管理员
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'noData',
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
        background: url('../../assets/images/empty.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        top: 300px;
        left: 77px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        line-height: 35px;
        font-size: 35px;
        color: #0c96ff;
    }
    .mainA-p2 {
        position: absolute;
        top: 364px;
        left: 77px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        line-height: 35px;
        text-align: center;
        font-size: 35px;
        color: #0c96ff;
    }
    .mainA-p2 p:nth-child(2){
        margin-left: 30px;
    }
    .mainA-footer {
        position: absolute;
        bottom: 41px;
        left:205px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 27px;
        font-size: 27px;
        color: #bcc2cd;
    }

</style>