<template>
    <!--极客-->
    <div class="container postNumber">
        <!--  有发帖的（有粉丝和无粉丝） a-->
        <div class="main mainA">
            <div class="mainA-p1 fontW">你未必出类拔萃</div>
            <div class="mainA-p2 fontW">但肯定与众不同</div>
            <div class="mainA-p3 fontW">
                <p>在极客发帖</p>
                <p :class="hasStyleChange(2) ? 'bigFont' : ''">2个</p>
                <p>评论</p>
                <p :class="hasStyleChange(0) ? 'bigFont' : ''">0个</p>
            </div>
        </div>

        <!--  无发帖 d-->
    </div>
</template>

<script>
    export default {
        name: 'postNumber',
        data(){
            return {

            }
        },
        methods: {
            hasStyleChange(number){
                try{
                    let n = parseInt(number);
                    return (n > 0 ? true : false);
                }catch(e){
                    return false;
                }

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
        background: url('../../assets/images/极客-有发帖.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        top: 143px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #6d52bb;
    }
    .mainA-p2 {
        position: absolute;
        top: 234px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #6d52bb;
    }
    .mainA-p3 {
        position: absolute;
        top: 352px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        line-height: 33px;
        font-size: 33px;
        color: #44577f;
    }
    .mainA-p3 p:nth-child(3){
        margin-left: 30px;
    }
    .mainA-p3 p {
        margin: 0;
    }
    .bigFont {
        line-height: 45px;
        text-align: center;
        font-size: 45px;
        font-weight: bold;
        color: #fdd164;
    }

</style>