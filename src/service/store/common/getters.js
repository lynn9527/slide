// 全局getters函数 返回你想要的全局状态格式
export default {
  menuOriginGetter: state => state.menuOrigin,
  userinfoGetter: state => state.userinfo,
  menuTreeGetter: state => state.menuTree,
  menuMapGetter: state => state.menuMap,
  isSharePageGetter: state => state.isSharePage,
  videoLikeCountGetter: state => state.videoLikeCount,
  videoCommentCountGetter: state => state.videoCommentCount,
  videoViewCountGetter: state => state.videoViewCount
};
