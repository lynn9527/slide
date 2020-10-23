<template>
    <!--调动-->
    <div class="container mMoves">
        <!--  有调动  a-->
        <div class="main mainA">
            <div class="mainA-p1">还记得</div>
            <div class="mainA-p2">曾经共事的小伙伴吗</div>
            <div class="mainA-footer">
                <p>换了</p>
                <p :class="hasStyleChange(1) ? 'bigFont' : ''">1个</p>
                <p>部门</p>
                <p>服务了</p>
                <p :class="hasStyleChange(0)">0个</p>
                <p>项目</p>
            </div>
        </div>

        <!--  无调动  c-->

    </div>
</template>

<script>
    export default {
        name: 'mMoves',
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
        background: url('../../assets/images/有调动.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainA-p1 {
        position: absolute;
        top: 170px;
        left: 87px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #fe6700;
    }
     .mainA-p2 {
        position: absolute;
        top: 252px;
        left: 87px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 53px;
        text-align: center;
        font-weight: 600;
        font-size: 53px;
        color: #fe6700;
    }
    .mainA-footer {
        position: absolute;
        top: 375px;
        left: 87px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #44577f;
    }
    .mainA-footer p:nth-child(4){
        margin-left: 30px;
    }
    .mainA-footer p {
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