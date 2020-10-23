export default [
  {
    name: 'details',
    method: 'POST',
    desc: '个人信息',
    path: '/user/userDetail',
    mockPath: '/user/userDetail',
    params: {}
  },
  {
    name: 'videos',
    method: 'POST',
    desc: '我的视频',
    path: '/material /listMaterialByUser',
    mockPath: '/material/myMaterial',
    params: {
      page: {
        pageNumbers: 1,
        countPerPages: 50
      },
      data: {}
    }
  },
  {
    name: 'rewards',
    method: 'POST',
    desc: '我的中奖',
    path: '/user/prizeInfo',
    mockPath: '/user/prizeInfo',
    params: {}
  },
  {
    name: 'fillluckinfo',
    method: 'POST',
    desc: '中奖信息',
    path: '/user/addMailInfo',
    mockPath: '/user/addMailInfo',
    params: {
      prizeNumber:"",
      awardNumber: ""
    }
  },
  {
    name: 'userDetail',
    method: 'POST',
    desc: '个人信息',
    path: '/user/userDetail',
    mockPath: '/user/userDetail',
    params: {}
  },
  {
    name: 'statisPermission',
    method: 'POST',
    desc: '统计权限验证',
    path: '/statis/statisPermission',
    mockPath: '/statis/statisPermission',
    params: {}
  },
  {
    name: 'toGame',
    method: 'POST',
    desc: '游戏统计',
    path: '/user/toGame',
    mockPath: '/user/toGame',
    params: {}
  },
  {
    name: 'luckDraw',
    method: 'POST',
    desc: '抽奖统计',
    path: '/user/luckDraw',
    mockPath: '/user/luckDraw',
    params: {}
  },
  {
    name: 'registerEnUser',
    method: 'POST',
    desc: '外国员工注册',
    path: '/register/registerEnUser',
    mockPath: '/register/registerEnUser',
    params: {
      openid: '',
      userName: '',
      registerCode: ''
    }
  }


];
