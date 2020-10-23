<template>
  <div class="box" v-if="isReset">
    <van-swipe
      ref="refSwipeItem"
      vertical
      :autoplay="autoplayTime"
      :loop="false"
      :width="swipeWidth"
      :height="swipeHeight"
      :duration="400"
      :show-indicators="false"
      :touchable="true"
      @change="swipeOnChange"
    >
      <!--首页-->
      <van-swipe-item>
        <AfirstPage v-on:parentChild="showMsgFromChild"></AfirstPage>
      </van-swipe-item>

      <!--排序页面-->
      <van-swipe-item v-for="(item, index) in middlePage" :key="item+index" @change="stopClick">
        <component :is="item" :rowList="rowList" @shareReSize="reSize"></component>
      </van-swipe-item>
   
    </van-swipe>

    <!--箭头-->
    <div class="arrowZone" v-show="hasArrow">
      <img src="../../assets/images/arrow.gif" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Toast } from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Toast);

export default {
  name: "index",
  data() {
    return {
      swipeWidth: document.documentElement.clientWidth,
      swipeHeight: document.documentElement.clientHeight,
      autoplayTime: 0, //轮播间隔时间
      rowList: [], //后台返回的数据
      middlePage: [], //排序显示的页面数组
      loadAllPage: [], //中转数组
      mannjuToken: "",
      isReset: true, //是否回流
      Findex: 0, //当前轮播索引
      indexFadeUp: [], //?
      hasArrow: false //是否显示向西箭头
    };
  },
  components: {
    //引入子组件
    AfirstPage: () => import("./AfirstPage"),
    bussinessDays: () => import("./bussinessDays"),
    entryYear: () => import("./entryYear"),
    workDaysPer: () => import("./workDaysPer"),
    overtimeDays: () => import("./overtimeDays"),
    clock: () => import("./clock"),
    marriage: () => import("./marriage"),
    maxScore: () => import("./maxScore"),
    maternity: () => import("./maternity"),
    postNumber: () => import("./postNumber"),
    mMoves: () => import("./mMoves"),
    approves: () => import("./approves"),
    sharePage: () => import("./sharePage")
  },
  watch: {
    Findex(index) {
      if (index) {
        $(".main > div").removeClass("animated fadeInUp");
        $("." + this.indexFadeUp[index - 1])
          .find(".main > div")
          .addClass("animated fadeInUp");
        $("." + this.indexFadeUp[index - 1])
          .find(".main > div > div")
          .addClass("animated fadeInUp");
      }else{
          $(".main > div").removeClass("animated fadeInUp");
      }

      if (this.indexFadeUp.length === index) {
        //welink分享成功后ios底部空白处理
        this.hasArrow = false;
        sessionStorage.setItem("isComingShare", "isComingShare");
      } else if (index === 0) {
        //首页
        this.hasArrow = false;
      } else {
        this.hasArrow = true;
        //设置箭头位置
        let w = window.innerWidth || document.documentElement.clientWidth;
        w = Math.ceil(w / 2);
        $(".arrowZone").css({ left: w + "px" });
        sessionStorage.removeItem("isComingShare");
      }
      console.log('hasArrow-------------'+ this.hasArrow);
    }
  },
  beforeMount() {
    var that = this;
    window.addEventListener("orientationchange", () => {
      if (window.orientation === 90 || window.orientation === -90) {
        //横屏
        that.isReset = false;
        that.$nextTick(function() {
          that.isReset = true;
        });
      } else if (
        window.orientation == null ||
        window.orientation === 180 ||
        window.orientation === 0
      ) {
        //竖屏
        that.isReset = false;
        that.$nextTick(function() {
          that.isReset = true;
        });
      }
    });
  },
  mounted() {
    //设置箭头位置
    let w = window.innerWidth || document.documentElement.clientWidth;
    w = Math.ceil(w / 2);
    $(".arrowZone").css({ left: w + "px" });

    //获取后台数据
    this.getData();

    //窗口变化时重新渲染
    const that = this;
    window.addEventListener("resize", () => {
      that.swipeWidth =
        window.innerWidth || document.documentElement.clientWidth;
      that.swipeHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (sessionStorage.getItem("isComingShare")) {
        //分享后触发
        this.reSize();
      }
    });
  },
  methods: {
    showMsgFromChild(data) {
      this.middlePage = [...this.loadAllPage];
      this.autoplayTime = data;
      setTimeout(() => {
        this.autoplayTime = 0; //只开启第一页自动翻页功能
      }, 1500);
    },
    swipeOnChange(index) {
      //获取轮播页面的索引值
      this.Findex = index;
      console.log('index:-------------------------'+ index);
    },
    stopClick() {
      //停止轮播
      this.autoplayTime = 0;
    },
    getData() {
      let summaryData = sessionStorage.getItem("summaryData");
      if (summaryData) {
        summaryData = JSON.parse(summaryData);
        this.rowList = summaryData;

        let summaryTemplate = sessionStorage.getItem("summaryTemplate");
        summaryTemplate = JSON.parse(summaryTemplate);

        this.loadAllPage = [...summaryTemplate];
        this.indexFadeUp = summaryTemplate;
      } else {
        console.log("未取到session数据");
      }
    },
    rePaint() {
      return new Promise((resolve, inject) => {
        this.isReset = false;
        try {
          this.$nextTick(function() {
            this.isReset = true;
            resolve(true);
          });
        } catch (e) {
          inject(false);
        }
      });
    },
    async reSize() {
      //页面重绘
      let flag = await this.rePaint();
      if (flag) {
        this.indexFadeUp.length &&
          this.$refs.refSwipeItem.swipeTo(this.indexFadeUp.length);
      }
    }
  }
};
</script>

<style scoped lang='scss'>
    div {
        height: 100%;
    }
    .box {
        position: relative;
    }
    .arrowZone {
        position: fixed;
        bottom: 50px;
        z-index: 2;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 39px;
    }
    .arrowZone img {
        width: 36px;
        height: 39px;
    }
</style>
<style>
    @import '../../assets/font/font.css';
    
    .animated {
        animation-iteration-count: 1;
    }
    .animated:nth-child(1){
        animation-delay: .3s;
    }
    .animated:nth-child(2){
        animation-delay: .8s;
    }
    .animated:nth-child(3){
        animation-delay: 1.3s;
    }
    .animated:nth-child(4){
        animation-delay: 1.8s;
    }
    .animated:nth-child(5){
        animation-delay: 2.3s;
    }

    .fontW {
        font-family: 'HYRuiZhiW';
        font-weight: 100!important;
    }

</style>