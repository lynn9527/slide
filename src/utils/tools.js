import sessionSaver from './sessionSaver';
export function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`);
}

export function getQueryObject() {
  let hashIndex = location.href.indexOf('#');
  let queryIndex = location.href.indexOf('?');
  let queryObj = {};
  let paramArr = hashIndex > queryIndex ? location.search.substr(1).split('&') : location.hash.substr(1).split('?');
  for (let i = 0; i < paramArr.length; i++) {
    let pos = paramArr[i].indexOf('=');
    if (pos === -1) continue;
    let name = paramArr[i].substr(0, pos);
    let value = decodeURIComponent(paramArr[i].substr(pos + 1)); // 解码
    queryObj[name] = value;
  }
  return queryObj;
}

/**
 * @description 函数节流
 * @param
 * @return
 */
export function throttle(fn, timeout, mustRunDelay) {
  var timer = null;
  var tStart;
  return function() {
    var context = this;
    var args = arguments;
    var curTime = +new Date();
    clearTimeout(timer);
    if (tStart !== curTime) {
      tStart = curTime;
    }
    if (curTime - tStart >= mustRunDelay) {
      fn.apply(context, args);
      tStart = curTime;
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, timeout);
    }
  };
}

/**
 * @description 检测是否到达底部
 * @param
 * @return
 */
export function isScrollBottom(el) {
  const viewHeight = el.clientHeight; // 文档可视高度
  const scrollHeight = el.scrollTop; // 滚动条滚动高度
  const documentHeight = el.scrollHeight; // 页面的高度：包括不可视区域
  return scrollHeight + viewHeight + 50 >= documentHeight;
}

export function hasClass(elements, cName) {
  return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)')); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
}

export function addClass(elements, cName) {
  if (!hasClass(elements, cName)) {
    // elements.className += ' ' + cName;
    if (elements.className === '') {
      elements.className = cName;
    } else {
      elements.className = elements.className + ' ' + cName;
    }
    // elements.className === '' ? elements.className = cName : elements.className = elements.className + ' ' + cName;
  }
}

export function removeClass(elements, cName) {
  if (hasClass(elements, cName)) {
    elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' '); // replace方法是替换
  }
}

export const beforeWatchVideo = {
  setParam: ({videoCategory = -1, index = -1, videoId = -1, scrollTop = 0} = {}) => {
    sessionSaver.set('watchVideoSaveParam', {
      videoCategory,
      index,
      videoId,
      scrollTop
    });
  },
  getParam: () => {
    sessionSaver.get('watchVideoSaveParam');
  },
  removeParam: () => {
    sessionSaver.remove('watchVideoSaveParam');
  }
};

export const dealScrollTop = {
  save: elClass => {
    const el = elClass ? document.getElementsByClassName(elClass)[0] : document.body;
    if (el) {
      sessionSaver.set(`${elClass || 'document.body'}.scroll.top`, el.scrollTop);
    } else {
      return false;
    }
  },
  set: elClass => {
    const el = elClass ? document.getElementsByClassName(elClass)[0] : document.body;
    const pos = sessionSaver.get(`${elClass || 'document.body'}.scroll.top`);
    pos && el && (el.scrollTop = Number(pos));
  }
};
