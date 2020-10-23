<template>
    <!--  产假  人生赢家  a1 a2-->
    <div class="container maternity">
        <div class="main mainA">
            <div class="mainA-p1 fontW">
                <p>以前</p>
                <p>父母的孩子</p>
            </div>
            <div class="mainA-p2 fontW">
                <p>现在</p>
                <p>孩子的父母</p>
            </div>
            <div class="mainA-p3 fontW">小宝宝诞生了</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'maternity',
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
        background: url('../../assets/images/产假.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainA-p1 {
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
        color: #fc8b00;
    }
    .mainA-p2 {
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
        color: #fc8b00;
    }
    .mainA-p3 {
        position: absolute;
        top: 313px;
        left: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 32px;
        text-align: center;
        font-size: 32px;
        color: #ab7b6d;
    }
    .mainA-p1 p, .mainA-p2 p {
        margin: 0;
    }

</style>