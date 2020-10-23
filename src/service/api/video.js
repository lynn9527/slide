export default [
  {
    name: 'videoSignature',
    method: 'POST',
    desc: '视频上传签名',
    path: '/tencentMethod/getSignature',
    mockPath: '/tencentMethod/getSignature',
    params: {}
  },
  {
    name: 'videoType',
    method: 'POST',
    desc: '视频类型',
    path: '/folder/listFirstFolder',
    mockPath: '/folder/listFirstFolder',
    params: {}
  },
  {
    name: 'videoUpload',
    method: 'POST',
    desc: '视频类型',
    path: '/material/addMaterail',
    mockPath: '/material/addMaterail',
    params: {
      folderNumber: '', //
      materialNumber: '', // assetId
      materialName: '',
      materialSize: '',
      materialUrl: ''
    }
  },
  {
    name: 'cateList',
    method: 'POST',
    desc: '视频列表',
    path: '/material/listTopMaterial',
    mockPath: '/material/listTopMaterial',
    params: {
      page: {},
      data: {}
    }
  },
  {
    name: 'topOnly10',
    method: 'POST',
    desc: 'top10的精彩视频(老的)',
    path: '/material/topVideo',
    mockPath: '/material/topVideo',
    params: {
      folderNumber: '',
      lableType: '',
      keyWord: ''
    }
  },
  {
    name: 'top10',
    method: 'POST',
    desc: 'top10的精彩视频(新)',
    path: '/material/getMaterialList',
    mockPath: '/material/getMaterialList',
    params: {
      page: {},
      data: {}
      // folderNumber: '',
      // lableType: '',
      // keyWord: ''
    }
  },
  {
    name: 'wonderfulVideo',
    method: 'POST',
    desc: '首页精彩视频',
    path: '/material/wonderfulVideo',
    mockPath: '/material/wonderfulVideo',
    params: {
      folderNumber: ''
    }
  },
  {
    name: 'videoDetail',
    method: 'POST',
    desc: '视频详情',
    path: '/material/videoDetail',
    mockPath: '/material/videoDetail',
    params: {
      materialNumber: ''
    }
  },
  {
    name: 'commentList',
    method: 'POST',
    desc: '评论列表',
    path: '/comment/commentList',
    mockPath: '/comment/commentList',
    params: {
      page: '',
      data: ''
    }
  },
  {
    name: 'addLike',
    method: 'POST',
    desc: '赞',
    path: '/comment/addLike',
    mockPath: '/comment/addLike',
    params: {
      businessNumber: '',
      businessType: ''
    }
  },
  {
    name: 'cancelLike',
    method: 'POST',
    desc: '取消赞',
    path: '/comment/cancelLike',
    mockPath: '/comment/cancelLike',
    params: {
      businessNumber: '',
      businessType: ''
    }
  },
  {
    name: 'addComment',
    method: 'POST',
    desc: '取消赞',
    path: '/comment/addComment',
    mockPath: '/comment/addComment',
    params: {
      businessNumber: '',
      businessType: '',
      comContent: ''
    }
  },
  {
    name: 'listMaterialByUser',
    method: 'POST',
    desc: '取消赞',
    path: '/material/listMaterialByUser',
    mockPath: '/material/listMaterialByUser',
    params: {
      page: ''
    }
  },
  {
    name: 'deleteVideo',
    method: 'POST',
    desc: '视频删除',
    path: '/material/deleteMaterial',
    mockPath: '/material/deleteMaterial',
    params: {
      materialNumber: '',
      materialId: ''
    }
  },
  {
    name: 'materialPlay',
    method: 'POST',
    desc: '添加视频播放次数',
    path: '/material/materialPlay',
    mockPath: '/material/materialPlay',
    params: {
      businessNumber: '',
      businessType: ''
    }
  },
  {
    name: 'getMaterialUrl',
    method: 'POST',
    desc: '添加视频播放次数',
    path: '/culturewing/callBack',
    mockPath: '/culturewing/callBack',
    params: {
      number: '',
      materialName: '',
      materialSize: ''
    }
  },
  {
    name: 'statisQuery',
    method: 'POST',
    desc: '数据统计',
    path: '/statis/statisQuery',
    mockpath: '/statis/statisQuery',
    params: {}
  },
  {
    name: 'statisQueryDaily',
    method: 'POST',
    desc: '日数据统计',
    path: '/statis/hourStatisList',
    mockpath: '/statis/hourStatisList',
    params: {}
  },
  {
    name: 'myLikeVideo',
    method: 'POST',
    desc: '我赞过的视频',
    path: '/material/myLikeVideo',
    mockpath: '/material/myLikeVideo',
    params: {
      page: {},
      data: {}
    }
  },
  {
    name: 'listKnowMaterial',
    method: 'POST',
    desc: '发现',
    path: '/material/listKnowMaterial',
    mockPath: '/material/listKnowMaterial',
    params: {
      page: {},
      data: {}
    }
  },
  {
    name: 'familiarPerson',
    method: 'POST',
    desc: '可能认识的人',
    path: '/material/listKnowMaterial',
    mockpath: '/material/listKnowMaterial',
    params: {
      page: {
        pageNumbers: 1,
        countPerPages: 10
      },
      data: {}
    }
  },
  {
    name: 'recommendedVideo',
    method: 'POST',
    desc: '推荐视频',
    path: '/material/getNewMaterialMsg',
    mockPath: '/material/getNewMaterialMsg',
    params: {}
  },
  {
    name: 'liveStatistics',
    method: 'POST',
    desc: '直播数据统计',
    path: '/material/liveStatistics',
    mockpath: '/material/liveStatistics',
    params: {
      city: ''
    }
  },
  {
    name: 'barrageCommentList',
    method: 'POST',
    desc: '直播评论列表',
    path: '/comment/getBarrageCommentList',
    mockPath: '/comment/getBarrageCommentList'
  },
  {
    name: 'barrageOnlineMumber',
    method: 'POST',
    desc: '直播在线人数',
    path: '/comment/getOnlineMumber',
    mockPath: '/comment/getOnlineMumber'
  }, // 2019-11-06
  {
    name: 'createAssetByFile',
    method: 'POST',
    desc: '华为云视频上传视频前创建媒资',
    path: '/vod/createAssetByFile',
    mockPath: '/vod/createAssetByFile',
    params: {
      fileName: '',
      suffix: ''
    }
  },
  {
    name: 'getVideoToken',
    method: 'GET',
    desc: '华为云视频获取上传视频的token信息',
    path: '/vod/getTemporaryCredential',
    mockPath: '/vod/getTemporaryCredential'
  },
  {
    name: 'confirmAsset',
    method: 'POST',
    desc: '华为云视频确认资源',
    path: '/vod/confirmAssetUpload',
    mockPath: '/vod/confirmAssetUpload',
    params: {
      assetId: ''
    }
  },
  {
    name: 'queryAssetDetailReq',
    method: 'POST',
    desc: '华为云视频根据媒资ID(assetId)获取上传视频播放地址',
    path: '/vod/queryAssetDetailReq',
    mockPath: '/vod/queryAssetDetailReq',
    params: {
      materialNumber: ''
    }
  },
  {
    name: 'addMaterail333',
    method: 'POST',
    desc: '华为云视频发布（关联到我们自己数据库）暂时保留',
    path: '/material/addMaterail',
    mockPath: '/material/addMaterail',
    params: {
      folderNumber: '', //视频类别编号
      materialNumber: '', // assetId
      materialName: '',//  视频标题
      materialSize: '',// 视频大小
      materialUrl: ''// 视频云播放地址

    }
  },
  {
    name: 'addMaterail',
    method: 'POST',
    desc: '华为云视频发布（关联到我们自己数据库）新方法',
    path: '/material/addHuaweiMaterail',
    mockPath: '/material/addHuaweiMaterail',
    params: {
      folderNumber: '', //视频类别编号
      materialNumber: '', // assetId
      materialName: '',//  视频标题
      materialSize: '',// 视频大小
      materialUrl: '',// 视频云播放地址
      lableType: ''//标签编号
    }
  },
  {
    name: 'checkAddMaterail',
    method: 'POST',
    desc: '家人来了添加视频校验',
    path: '/material/checkAddMaterail',
    mockPath: '/material/checkAddMaterail',
    params: {}
  }
];
