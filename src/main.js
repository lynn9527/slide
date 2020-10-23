// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

// 引入插件
import router from 'Plugins/router';
import inject from 'Plugins/inject';
import store from 'Plugins/store';

// 引入根组件
import App from './App';

import animated from 'animate.css';

Vue.use(animated);
Vue.use(inject);

import vConsole from '../static/js/vconsole.js';
//import { shim } from 'promise.prototype.finally';
require('promise.prototype.finally').shim();

// fastclick 处理300ms延迟
const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.prototype.$sign = new Vue();
gGlobal.vbus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
