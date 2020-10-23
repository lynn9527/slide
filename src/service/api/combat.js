export default [
  {
    name: 'registerFamilyUser',
    method: 'POST',
    desc: '家人加入战队',
    path: '/register/registerFamilyUser',
    mockPath: '/register/registerFamilyUser',
    params: {
      openid: '',
      relationUser: '',
      age: '',
      userName: '',
      phone: '',
      relationUserType: '',
      relationTypeName: '',
      isCredentialsNonExpired: '',
      companyMailbox: ''
    }
  },
  {
    name: 'updateUserTeamName',
    method: 'POST',
    desc: '修过战队名称',
    path: '/user/updateUserTeamName',
    mockPath: '/user/updateUserTeamName',
    params: {
      teamName: '',
    }
  },
  {
    name: 'getTeamInfo',
    method: 'GET',
    desc: '获取战队信息',
    path: '/register/getTeamInfo',
    mockPath: '/register/getTeamInfo',
    params: {
      signature: '',
    }
  },

];
