<template>
  <!--入职-->
  <div class="container entryYear">
      <!--   <1年  c-->
      <!-- <div class="main mainA">
          <div class="mainA-p1 fontW">
              <p>最好的相遇是</p>
              <p>有未来</p>
          </div>
          <div class="mainA-p2">2020年01月01日</div>
          <div class="mainA-p3">我第一次和中软国际相遇</div>
          <div class="mainA-p4">从此开启了属于我们的缘分</div>

      </div> -->

      <!--  >= 5年  <10年  ||  >=1年  <5年  b c-->

      <!--  >=10年  a-->
      <div class="main mainC">
          <div class="mainC-p1 fontW">
              <p>十年相伴</p>
              <p>不忘初心</p>
          </div>
          <div class="mainC-p2 fontW">我已经陪伴中软国际</div>
          <div class="mainC-footer fontW">
              <p>走过了</p>
              <p>100个</p>
              <p>日夜</p>
          </div>

      </div>



  </div>
</template>

<script>
export default {
  name: "entryYear",
  data() {
    return {};
  }
};
</script>

<style scoped lang='scss'>
     @import '../../assets/sass/base/_base';
     @import '../../assets/sass/pages/_entryYear';

    // .container {
    //     @include container;

    //     // width: 100%;
    //     // height: 100%;
    // }
    .main {
        @include background(url('../../assets/images/入职10年以上.png') no-repeat);

        // position: relative;
        // width: 100%;
        // height: 100%;
    }
    // .mainC {
    //     // background: url('../../assets/images/入职10年以上.png') no-repeat;
    //     // background-size: 100% 100%;
    // }
    .mainC-p1 {
        position: absolute;
        top: 150px;
        left: 67px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        line-height: 56px;
        text-align: center;
        font-weight: 600;
        font-size: 56px;
        color: #ff6600;
       
    }
    .mainC-p1 p {
        margin: 0;
    }
    .mainC-p1 p:nth-child(2) {
        margin-left: 30px;
    }
    .mainC-p2 {
        position: absolute;
        top: 263px;
        left: 67px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 33px;
        text-align: center;
        font-size: 33px;
        color: #45577b;
    }
    .mainC-footer {
        position: absolute;
        top: 340px;
        left: 67px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
        font-size: 33px;
    }
    .mainC-footer p:not(:nth-child(2)){
        text-align: center;
        line-height: 33px;
        font-size: 33px;
        color: #45577b;
    }
    .mainC-footer p:nth-child(2){
        line-height: 45px;
        text-align: center;
        font-weight: bold;
        font-size: 45px;
        color: #fdd164;
    }
    .mainC-footer p{
        margin: 0;
    }




</style>