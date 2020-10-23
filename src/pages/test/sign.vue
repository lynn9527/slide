<template>
  <div class="dialog" id="dialog">

    <p class="size">请使用正楷书写</p>

    <div id="canvas"></div>

    <div class="btn" ref="btn">
      <button @click="handelSaveEl()" style="background-color:#1989fa">提交</button>
      <button @click="handelClearEl()" style="background-color:#fec12a">重签</button>
      <button @click="cancelButton()" style="background-color:#bbbbbb">取消</button>
    </div>

    <img id="img" v-show="hidein"/>
  </div>
</template>
<script>
import Vue from "vue";
import {Button,Col,Row ,NoticeBar,Toast } from 'vant';
Vue.use(Button).use(Col).use(Row).use(NoticeBar ).use(Toast);
//import store from '../api/localStory';
 import BScroll from 'better-scroll'
let canvas = document.createElement("canvas");
let cxt = canvas.getContext("2d");
export default {
  name: "sign",
  data() {
   this.$router.push("/sign");
    return {
      linewidth: 5, //线条粗细，选填
      color: "black", //线条颜色，选填
      background: "white", //线条背景，选填
      imgsrc: "",
      visualH: 0, //签名可视区域高度
      visualW: 0, //签名可视区域宽度
      urlsrc:"",
      hidein:false,
      orientation:false,//橫竖屏，横屏true
      isEmpty:false
    };
  },

  beforeMount() {
    window.addEventListener('orientationchange', () => {
      this.visualH=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.visualW=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if(window.orientation === 90 || window.orientation === -90){ //横屏
        this.orientation = true;
      }else if(window.orientation == null || window.orientation === 180 || window.orientation === 0) {//竖屏
        this.orientation = false;
      }
    });
  },
  watch: {
    visualH(newVal, oldVal){
      if(oldVal !== 0){//排除首次进入页面情况
        let w, h;
        if(window.orientation === 90 || window.orientation === -90) {//横屏
          let s = document.documentElement.clientWidth;
          w = newVal < oldVal ? oldVal : newVal + s * 0.13;
          h = (newVal > oldVal ? oldVal : newVal) * 0.72;
        }else if(window.orientation == null || window.orientation === 180 || window.orientation === 0) {//竖屏
          w = document.documentElement.clientWidth * 0.7;
          h = newVal < oldVal ? oldVal : newVal;
        }

        this.$sign.$emit('change', w, h);
      }
    }
  },
  mounted(){
    /*
      * 定义页面刷新事件
      * */
    this.$sign.$on('change', (w, h) => {
      let dialog =document.querySelector("#dialog");
      let scroll =new BScroll(dialog);
      this.getCanvas(w, h);
    });

    this.visualW = document.documentElement.clientWidth;
    this.visualH =  document.documentElement.clientHeight;
    let canvasW = this.visualW;
    if(window.orientation == null || window.orientation === 180 || window.orientation === 0) {//竖屏
      canvasW = this.visualW * 0.7;
    }else if(window.orientation === 90 || window.orientation === -90) {//横屏

    }

    this.getCanvas(canvasW, this.visualH);
    let dialog =document.querySelector("#dialog");
    let scroll =new BScroll(dialog);
  },

  methods:{
    getCanvas(w, h){
      let el = document.getElementById("canvas");
      el.appendChild(canvas);
      canvas.width = w;
      canvas.height = h;
      cxt.fillStyle = this.background; //填充绘图的背景颜色
      cxt.fillRect(0, 0, canvas.width, canvas.height); //绘制“已填色”的矩形
      cxt.strokeStyle = this.color; //笔触的颜色
      cxt.lineCap = "round"; //线条末端线帽的样式
      let linewidth = this.linewidth;
      //开始绘制
      canvas.addEventListener(
        "touchstart",
        function(e) {
          cxt.beginPath();
          cxt.lineWidth = linewidth; //当前线条的宽度，以像素计
          if(window.orientation == null || window.orientation === 180 || window.orientation === 0) {//竖屏
            cxt.moveTo(e.changedTouches[0].pageX-70, e.changedTouches[0].pageY);
          }else if(window.orientation === 90 || window.orientation === -90) {//横屏
            cxt.moveTo(e.changedTouches[0].pageX , e.changedTouches[0].pageY-30);
          }
        }.bind(this),
        false
      );
      //绘制中
      canvas.addEventListener(
        "touchmove",
        function(e) {
          if(window.orientation == null || window.orientation === 180 || window.orientation === 0) {//竖屏
            cxt.lineTo(e.changedTouches[0].pageX-75, e.changedTouches[0].pageY);
          }else if(window.orientation === 90 || window.orientation === -90) {//横屏
            cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY-35);
          }
          cxt.stroke();
          this.isEmpty = true;
        }.bind(this),
        false
      );
      //结束绘制
      canvas.addEventListener(
        "touchend",
        function() {
          cxt.closePath();
        }.bind(this),
        false
      );
    },

    cancelButton(){
      this.dialog=false;
      this.handelClearEl();
      this.$router.push('/fileRead');
    },

    handelClearEl() {
      this.isEmpty = false;
      cxt.clearRect(0, 0, canvas.width, canvas.height);
    },

    rotateBase64Img(src, edg, callback) {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      var imgW;//图片宽度
      var imgH;//图片高度
      var size;//canvas初始大小

      if (edg % 90 != 0) {
        console.error("旋转角度必须是90的倍数!");
        throw '旋转角度必须是90的倍数!';
      }
      (edg < 0) && (edg = (edg % 360) + 360)
      const quadrant = (edg / 90) % 4; //旋转象限
      const cutCoor = {sx: 0, sy: 0, ex: 0, ey: 0}; //裁剪坐标

      var image = new Image();
      image.crossOrigin = "anonymous"
      image.src = src;

      image.onload = function () {

        imgW = image.width;
        imgH = image.height;
        size = imgW > imgH ? imgW : imgH;

        canvas.width = size * 2;
        canvas.height = size * 2;
        switch (quadrant) {
          case 0:
            cutCoor.sx = size;
            cutCoor.sy = size;
            cutCoor.ex = size + imgW;
            cutCoor.ey = size + imgH;
            break;
          case 1:
            cutCoor.sx = size - imgH;
            cutCoor.sy = size;
            cutCoor.ex = size;
            cutCoor.ey = size + imgW;
            break;
          case 2:
            cutCoor.sx = size - imgW;
            cutCoor.sy = size - imgH;
            cutCoor.ex = size;
            cutCoor.ey = size;
            break;
          case 3:
            cutCoor.sx = size;
            cutCoor.sy = size - imgW;
            cutCoor.ex = size + imgH;
            cutCoor.ey = size + imgW;
            break;
        }


        ctx.translate(size, size);
        ctx.rotate(edg * Math.PI / 180);
        ctx.drawImage(image, 0, 0);

        var imgData = ctx.getImageData(cutCoor.sx, cutCoor.sy, cutCoor.ex, cutCoor.ey);
        if (quadrant % 2 == 0) {
          canvas.width = imgW;
          canvas.height = imgH;
        } else {
          canvas.width = imgH;
          canvas.height = imgW;
        }
        ctx.putImageData(imgData, 0, 0);
        callback(canvas.toDataURL())
      };
    },

    callback(base64data){
      document.getElementById("img").src=base64data;
      let urlsrc=document.getElementById("img").src;
      //console.log(urlsrc);
      this.urlsrc=urlsrc.split(",")[1];
      // store.set("pngBase64",this.urlsrc);
      // store.set("flag","true");
    },
    handelSaveEl() {
      if(!this.isEmpty){
        Toast({
          className:"tip",
          message: '签字不能为空！'
        });
        return
      }
      let imgbase =canvas.toDataURL();
      let imgbase64 = imgbase.split(",")[1];
      // store.set("pngBase64",imgbase64);
      // store.set("flag","false")
      if(this.orientation){
        this.rotateBase64Img(imgbase,0,this.callback);
      }else{
        this.rotateBase64Img(imgbase,270,this.callback);
      }

      setTimeout(()=>{
       this.$router.push("/msgAuth");
      },10)
    },

  },
}
</script>

<style scoped>


  /*竖屏模式*/
  @media only screen and (orientation:portrait){
    .dialog {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      background-color: white;
      position: relative;
      overflow: hidden;
    }

    .size {
      width:auto;
      position: absolute;
      display: flex;
      align-items: center;
      right: -10%;
      top: 47%;
      height: auto;
      font-size:0.16rem;
      color: #333333;

      transform: rotate(90deg) !important;
    }

    #canvas {
      height:99.7%;
      width: 70%;
      position: absolute;
      left: 0.6rem;
      background-color: #f9f9f9;
      overflow: hidden;
      border:1px solid #eeeeee;

    }

    .btn {
      width: 13%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      z-index: 999999;
    }

    .btn button {
      font-size: 0.16rem;
      /*height:6%;*/
      width:260%;
      padding: 0.1rem 0.1rem;
      color: white;
      outline: none;
      border: none;
      border-radius:0.03rem;
      background-color: #1989fa;
      -webkit-transform: rotate(90deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
      margin-left:0.1rem;
    }

  }
  /*横屏模式*/
  @media only screen and (orientation:landscape){
    #dialog {
     font-size: 0.09rem;
      width: 100%;
      height: 100%;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      align-content: center;
      background-color: white;
      position: relative;
    }
    .size {
      font-size:0.09rem;
      width:100%;
      height: 10%;
      display: flex;
      color: #333333;
      align-items: center;
      justify-content: center;
    }

    canvas{
      width: 100%;
    }

    #canvas {
      height:72%;
      width: 100%;
      position: relative;
      bottom: 0.0033rem;
      /*background-color: #f9f9f9;*/
      background-color: white;
      overflow: hidden;
      border:1px solid #eeeeee;
    }
    .btn{
      width: 100%;
      height: 13%;
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      z-index: 999999;
      height: 13%;
      bottom:0;
      padding: 0.05rem 0.05rem;
      /*bottom: 3.66rem;*/
      /*margin-top: 0.14rem;*/

    }
    .btn button {
      color: white;
      outline: none;
      border: none;
      border-radius:0.03rem;
      background-color: #1989fa;
      width: 0.715rem;
      height: 0.232rem;
    }
  }
  #img{
    position: absolute;
    top: 672px;
    left: 0;
    width: 360px;
    height: 200px;
  }

 </style>
<style>
  @media only screen and (orientation:portrait) {
    .tip {
      transform: rotate(90deg) !important;
    }
  }
</style>
