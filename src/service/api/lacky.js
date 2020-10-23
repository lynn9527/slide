export default [
  {
    name: 'isUserSign',
    method: 'GET',
    desc: '签到状态',
    path: '/sign/isUserSign',
    mockPath: '/sign/isUserSign',
    params: {
      userNumber : ''
    }
  },
  {
    name: 'userSign',
    method: 'GET',
    desc: '用户签到',
    path: '/sign/userSign',
    mockPath: '/sign/userSign',
    params: {
      userNumber : ''
    }
  },
  {
    name: 'luckyBodyDetail',
    method: 'GET',
    desc: '获取当日幸运宝宝接口',
    path: '/luckybody/luckyBodyDetail',
    mockPath: '/luckybody/luckyBodyDetail',
    params: {}
  },
  {
    name: 'getCurDateTime',
    method: 'GET',
    desc: '获取当前时间',
    path: '/luckybody/getCurDateTime',
    mockPath: '/luckybody/getCurDateTime',
    params: {}
  },

  {
    name: 'fancycarp',
    method: 'GET',
    desc: '获取用户参与年度锦锂的抽奖资格',
    path: '/fancycarp/getFancyCarpWinQual',
    mockPath: '/fancycarp/getFancyCarpWinQual',
    params: {
      userNumber : ''
    }
  },
  {
    name: 'carpWinner',
    method: 'GET',
    desc: '获取年度锦锂奖获奖者',
    path: '/fancycarp/getFancyCarpWinner',
    mockPath: '/fancycarp/getFancyCarpWinner',
    params: {}
  },

  {
    name: 'addressInfo',
    method: 'POST',
    desc: '保存用户收货地址',
    path: '/useraddress/saveEnUserAddressInfo',
    mockPath: '/useraddress/saveEnUserAddressInfo',
    params: {
        userNumber:"",
        phone:""
    }
  },
  {
    name: 'getUserAddress',
    method: 'GET',
    desc: '获取用户收货地址',
    path: '/useraddress/getUserAddress',
    mockPath: '/useraddress/getUserAddress',
    params: {}
  },
  {
    name: 'updateUserSignature',
    method: 'POST',
    desc: '修改个性签名',
    path: '/user/updateUserSignature',
    mockPath: '/user/updateUserSignature',
    params: {
      signature:"",
    }
  },
  {
    name: 'TeamMaterial',
    method: 'GET',
    desc: '排行榜家人来了前十',
    path: '/material/topTeamMaterial',
    mockPath: '/material/TeamMaterial',
    params: {}
  },

  {
    name: 'fancYcarp',
    method: 'GET',
    desc: '锦鲤中奖图接口',
    path: '/fancycarp/getFancycarpImg',
    mockPath: '/fancycarp/getFancycarpImg',
    params: {}
  },
]

