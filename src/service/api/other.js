export default [
  {
    name: 'userinfo',
    method: 'GET',
    desc: '测试服务处',
    path: '/tomato/common/showAllGroup',
    mockPath: '/api/userinfo',
    params: {
      a: 1,
      b: 2
    }
  },
  {
    name: 'listJavaVote',
    method: 'POST',
    desc: 'Java大赛列表',
    path: '/vote/javaVoteActList',
    mockPath: '/vote/javaVoteActList',
    params: {
      page: {},
      data: {}
    }
  },
  {
    name: 'javaVoteAct',
    method: 'POST',
    desc: 'Java大赛投票',
    path: '/vote/javaVoteAct',
    mockPath: '/vote/javaVoteAct',
    params: {
      actNumber: ''
    }
  },
  {
    name: 'detailJavaVote',
    method: 'POST',
    desc: 'Java大赛详情',
    path: '/vote/getVoteActDetail',
    mockPath: '/vote/getVoteActDetail',
    params: {
      actId: ''
    }
  }
];
