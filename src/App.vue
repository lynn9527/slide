<template>
  <div class="app-container">
    <transition name="router-fade" mode="out-in">
      <keep-alive> <router-view v-if="$route.meta.keepAlive"></router-view> </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <div class="misk" v-show="sharePage"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);


export default {
  name: 'App',
  data() {
    return {
      toastInfo: '',
      toastType: 'error',
      sharePage: false
    };
  },
  created() {
    if (location.href.indexOf('sharePage') > -1) {
      this.sharePage = true;
      // alert(sessionStorage.getItem("sharePage"));
      this.$root.isSharePage = true;
      sessionStorage.setItem('sharePage', 'true');
      // alert(sessionStorage.getItem("sharePage"));
      // this.SET_SHARE_PAGE(true);
      return;
    }
    this.bindEvent();
  },
  methods: {
    /**
     * @description 绑定公共事件
     * @param
     * @return
     */
    bindEvent() {
      // 自行触发
      gGlobal.vbus.$on('ajax.request.error', resData => {
        Toast({
          message: resData,
          duration: 1500,
          className: 'toast-error'
        });
        // this.toastInfo = resData;
      });
      gGlobal.vbus.$on('ajax.response.error', resData => {
        // this.toastInfo = resData;
        Toast({
          message: resData,
          duration: 1500,
          className: 'toast-error'
        });
      });
    },
  }
};
</script>
<style scoped lang="scss">
.app-container {
  position: relative;
  height: 100%;
  width: 100%;
  // background-color: #f2f2f2;

  .toast-info {
    color: #8bff7e;
  }

  .toast-error {
    color: #ff3133 !important;
  }
  .misk {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
