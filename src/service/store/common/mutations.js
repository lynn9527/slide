// 全局state 存放所有模块，业务线都有可能调用的状态
// 把state放入mutations是为了方便开发，观察状态 ，和状态对应的相关方法

export const state = {
  toLoginPath: '',
  toLogin: false,
  userinfo: null,
  fruit: null,
  isSharePage: false,
  videoLikeCount: 0,
  videoCommentCount: 0,
  videoViewCount: 0
};

// 全局mutations
export const mutations = {
  SET_TO_LOGIN(state, boolean) {
    state.toLogin = boolean;
  },
  SET_TO_LOGIN_PATH(state, path) {
    state.toLoginPath = path;
  },
  SET_USER_INFO(state, resData) {
    state.userinfo = resData;
  },
  SET_FRUIT(state, resData) {
    state.fruit = resData;
  },
  SET_VIDEO_LIKE_COUNT(state, count) {
    state.videoLikeCount = count;
  },
  SET_VIDEO_COMMENT_COUNT(state, count) {
    state.videoCommentCount = count;
  },
  SET_VIDEO_VIEW_COUNT(state, count) {
    state.videoViewCount = count;
  }
  // SET_SHARE_PAGE(state, sharePage) {
  //   state.isSharePage = sharePage;
  // }
};
