/**
 * @Author: Hexon
 * @Date: 2018/12/12 下午2:46
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/12/12 下午2:46
 * @description:
 */
import wxConfig from './wxConfig';

/**
 * @description 取得缓存中的签名
 * @param
 * @return
 */
const getWxJsSdkSign = () => {
  const url = window.location.href.split('#')[0];
  return JSON.parse(sessionStorage.getItem(`wxjssdksign_${url}`));
};

/**
 * @description 缓存微信签名
 * @param
 * @return
 */
const setWxJsSdkSign = wxconfig => {
  const url = window.location.href.split('#')[0];
  wxconfig.expireTime = Number(wxconfig.timestamp) + 6600;
  sessionStorage.setItem(`wxjssdksign_${url}`, JSON.stringify(wxconfig));
};

/**
 * @description 调用后端接口对url签名并获取凭证，然后注入验证配置
 * @param
 * @return
 */
const getWxJsapiSignature = (url, callback) => {
  gGlobal.ajax
    .post('/weixin/getJsapiSignature', {
      url
    })
    .then(res => {
      if (res.code === 200) {
        console.info('调用后端签名成功');
        // 微信jssdk签名
        wxConfig(res.result, callback);
        // 保存微信签名
        setWxJsSdkSign(res.result);
      }
    })
    .catch(err => {
      console.error('后端签名失败');
      console.error(err.message);
    });
};

/**
 * @description 获取分享url的微信回调地址
 * @param
 * @return
 */
function getAuth2UrlByUrl(url) {
  let params = {toUrl: url};
  gGlobal.ajax
    .post('/weixin/getAuth2UrlByUrl', params)
    .then(res => {
      if (res.code !== 200) {
        throw new Error(res.ReturnMsg);
      }
      location.replace(res.result.url);
    })
    .catch(err => {
      console.error(err.message);
    });
}

/**
 * @description 进行重定向
 * @param
 * @return
 */
const wxRedirect = () => {
  let searchParams;
  // if (location.href.indexOf('&from=singlemessage') > -1) {
  //   searchParams = location.search.replace('&from=singlemessage', '');
  // } else if (location.href.indexOf('&from=timeline') > -1) {
  //   searchParams = location.search.replace('&from=timeline', '');
  // } else if (location.href.indexOf('&from=groupmessage') > -1) {
  //   searchParams = location.search.replace('&from=groupmessage', '');
  //   // }
  searchParams = location.href.split('&');
  for (let item of searchParams) {
    if (location.href.indexOf('sharePage=videoDetail') > -1) {
      if (item.indexOf('videoId') > -1) {
        getAuth2UrlByUrl('/#/video/detail?' + item);
        return;
      }
    } else if (location.href.indexOf('sharePage=liveBroadcast') > -1) {
      getAuth2UrlByUrl('/#/liveBroadcast');
      return;
    }
    /* if (item.indexOf('videoId') > -1) {
      if (location.href.indexOf('sharePage=videoDetail') > -1) {
        getAuth2UrlByUrl('/#/video/detail?' + item);
      }
      return;
    } */
  }
  getAuth2UrlByUrl('/#/home');
  // 根据sharePage类别进行重定向
};

/**
 * @description 进行微信jssdk签名
 * @param
 * @return
 */
const wxSdk = callback => {
  // 1. 获取缓存中的jssdk签名
  const getWxConfig = getWxJsSdkSign(); // 从缓存中获取jssdk签名
  const newData = Date.parse(new Date()) / 1000;

  // 2. 判断缓存的jssdk签名是否过期
  if (getWxConfig && newData < getWxConfig.expireTime) {
    wxConfig(getWxConfig, callback);
    return;
  }

  // 3. 重新签名
  var url = window.location.href.split('#')[0];
  // jssdk签名过期了，重新获取签名
  getWxJsapiSignature(url, callback);
};

const wxHideMenu = function() {
  wxSdk(() => {
    wx.ready(function() {
      wx.hideAllNonBaseMenuItem();
      // 隐藏菜单项
    });
  });
};

export default {
  wxSdk,
  wxRedirect,
  wxHideMenu
};
