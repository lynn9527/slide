<template>
    <!--考试-->
    <div class="container maxScore">
        <!--  大于90分  c-->

        <!--  无考试  b-->

        <!--  >=0 <=90分  a-->
        <div class="main mainC">
            <div class="mainC-p1 fontW">你必须十分努力</div>
            <div class="mainC-p2">才能显得毫不费力</div>
            <div class="mainC-p3">一共参加了1次考试</div>
            <div class="mainC-footer">
                <p>最高成绩是</p>
                <p>90分</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'maxScore',
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
    .mainC {
        background: url('../../assets/images/考试-90分以下.png') no-repeat;
        background-size: 100% 100%;
    }
    .mainC-p1 {
        position: absolute;
        top: 178px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #42b3ff;
    }
    .mainC-p2 {
        position: absolute;
        top: 275px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 52px;
        text-align: center;
        font-weight: 600;
        font-size: 52px;
        color: #42b3ff;
    }
    .mainC-p3 {
        position: absolute;
        top: 385px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #44577f;
    }
    .mainC-footer {
        position: absolute;
        top: 455px;
        left: 85px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
    }
    .mainC-footer p:not(:nth-child(2)){
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #44577f;
    }
    .mainC-footer p:nth-child(2){
        line-height: 48px;
        text-align: center;
        font-size: 48px;
        font-weight: 600;
        color: #ffba00;
    }
    .mainC-footer p {
        margin: 0;
    }

</style>