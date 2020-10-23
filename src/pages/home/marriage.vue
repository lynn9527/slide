<template>
    <!--婚假  家成就业   b-->
    <div class="container marriage">
        <div class="main mainA">
            <div class="mainA-p1">有人陪你立黄昏</div>
            <div class="mainA-p2">有人问你粥可温</div>
            <div class="mainA-p3">
                <p>我结婚了</p>
                <p>一切都刚刚好</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'marriage',
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
        background: url('../../assets/images/婚假.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        top: 107px;
        left: 72px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #fc807e;
    }
    .mainA-p2 {
        position: absolute;
        top: 197px;
        left: 72px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #fc807e;
    }
    .mainA-p3 {
        position: absolute;
        top:311px;
        left: 72px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        line-height: 32px;
        text-align: center;
        font-size: 32px;
        color: #44587d;
    }
    .mainA-p3 p:nth-child(2){
        margin-left: 30px;
    }

</style>