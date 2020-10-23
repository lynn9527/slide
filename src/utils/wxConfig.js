/**
 * @Author: Hexon
 * @Date: 2018/12/7 上午10:54
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/12/7 上午10:54
 * @description: 获取微信js-sdk 签名
 */
// const wx = require('../../static/js/jweixin-1.2.0');

const wxConfig = (config, callback) => {
  wx.config({
    beta: false,
    debug: false, // 开启调试模式,
    appId: config.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
    timestamp: config.timestamp, // 必填，生成签名的时间戳
    nonceStr: config.nonceStr, // 必填，生成签名的随机串
    signature: config.signature, // 必填，签名，见附录1
    jsApiList: [
      'openLocation',
      'getLocation',
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareWechat',
      'updateAppMessageShareData',
      'updateTimelineShareData',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'hideMenuItems',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'translateVoice',
      'startRecord',
      'stopRecord',
      'onRecordEnd',
      'playVoice',
      'pauseVoice',
      'stopVoice',
      'uploadVoice',
      'downloadVoice',
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'getNetworkType',
      'hideOptionMenu',
      'showOptionMenu',
      'closeWindow',
      'scanQRCode',
      'chooseWXPay',
      'openProductSpecificView',
      'addCard',
      'chooseCard',
      'openCard'
    ] // 需要签名的应用列表
  });
  wx.ready(() => {
    console.info('签名成功');
    typeof callback === 'function' && callback();
  });
  wx.error(err => {
    console.error('签名失败');
    console.error(err.message);
  });
};

export default wxConfig;
