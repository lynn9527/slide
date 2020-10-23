var wxShare = function(desc, shareParams, userName, isTeamShare) {
  initWxShare(desc, shareParams, userName, isTeamShare);
};

function initWxShare(desc, shareParams, userName, isTeamShare, shareImg = '') {
  // var protocol = window.location.protocol;
  const ua = navigator.userAgent.toLowerCase();
  // 判断是否为微信浏览中打开
  if (!(ua.indexOf('micromessenger') > -1)) {
    return;
  }

  // 判断是否为企业微信
  var isWxWork = ua.indexOf('wxwork') > -1;

  // var linkUrl = `http://cc.chinasofti.com/${shareParams}`;
  var linkUrl = `http://nygtest.chinasofti.com/${shareParams}`;

  if (!isWxWork) {
    // 微信中分享需要在wx.ready中执行
    try {
      wx.ready(function() {
        // wx.showAllNonBaseMenuItem();
        wx.hideAllNonBaseMenuItem();
        // 在微信中隐藏菜单
        // wx.hideMenuItems({
        //   menuList: [
        //     'menuItem:share:appMessage',
        //     'menuItem:share:timeline',
        //     'menuItem:share:qq',
        //     'menuItem:share:weiboApp',
        //     'menuItem:share:QZone',
        //     'menuItem:copyUrl',
        //     'menuItem:openWithQQBrowser',
        //     'menuItem:openWithSafari',
        //     'menuItem:share:email',
        //     'menuItem:share:brand'
        //   ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        // });
        // wx.updateAppMessageShareData({
        //   title: desc, // 分享标题
        //   desc: '来自中软嘉年华',
        //   link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //   // imgUrl: protocol + '//' + host + '/appImage/logo/cmb_o2o.jpg', // 分享图标
        //   success: function(res) {
        //     // alert(linkUrl);
        //   },
        //   cancel: function() {
        //     // 用户取消分享后执行的回调函数
        //     // alert(linkUrl);
        //   }
        // });
        // wx.updateTimelineShareData({
        //   title: desc, // 分享标题
        //   desc: '来自中软嘉年华',
        //   link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //   // imgUrl: protocol + '//' + host + '/appImage/logo/cmb_o2o.jpg', // 分享图标
        //   success: function(res) {},
        //   cancel: function() {
        //     // 用户取消分享后执行的回调函数
        //     // alert(linkUrl);
        //   }
        // });
      });
    } catch (e) {}
  } else {



    // // 显示所有的菜单
     wx.showAllNonBaseMenuItem();
    // // 显示菜单
    // wx.hideMenuItems({
    //   menuList: ['menuItem:openWithSafari', 'menuItem:share:email'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    // });
    // 企业微信执行
console.log('isTeamShare: '+ isTeamShare);
console.log('desc: '+ desc);
console.log('userName: '+ userName);
console.log('shareImg: '+ shareImg);
     if(isTeamShare){
        wx.invoke(
            "shareWechatMessage", {
            title: 'CSI New Year Gala', // 分享标题
            desc:  userName + 'Invited you to join team！', // 分享描述
            link: shareParams, // 分享链接
            imgUrl: '' // 分享封面
            }, function(res) {
            //alert('is ok');

            }
        );


    }

    //shareImg = userName;



    // wx.onMenuShareAppMessage({
    //   title: desc, // 分享标题
    //   desc: '来自中软国际网络嘉年华',
    //   link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //   imgUrl: shareImg, // protocol + '//' + host + '/appImage/logo/cmb_o2o.jpg', // 分享图标
    //   success: function(res) {
    //     // alert(linkUrl);
    //   },
    //   cancel: function() {
    //     // 用户取消分享后执行的回调函数
    //     // alert(linkUrl);
    //   }
    // });
    // 在企业微信中打开分享到微信的按钮
    // wx.onMenuShareWechat({
    //   title: desc, // 分享标题
    //   desc: '来自中软国际网络嘉年华',
    //   link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //   imgUrl: shareImg, // protocol + '//' + host + '/appImage/logo/cmb_o2o.jpg', // 分享图标
    //   success: function(res) {},
    //   cancel: function() {
    //     // 用户取消分享后执行的回调函数
    //     // alert(linkUrl);
    //   }
    // });

    // wx.onMenuShareTimeline({
    //   title: desc, // 分享标题
    //   desc: '来自中软国际网络嘉年华',
    //   link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //   imgUrl: shareImg, // protocol + '//' + host + '/appImage/logo/cmb_o2o.jpg', // 分享图标
    //   success: function(res) {},
    //   cancel: function() {
    //     // 用户取消分享后执行的回调函数
    //   }
    // });
  }
}
export default wxShare;
