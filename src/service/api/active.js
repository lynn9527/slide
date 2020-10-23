/**
 * @Author: Hexon
 * @Date: 2018/12/20 下午3:10
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/12/20 下午3:10
 * @description:
 */
export default [
  {
    name: 'activesList',
    method: 'POST',
    desc: '活动列表',
    path: '/vote/listVoteAct',
    mockpath: '/vote/listVoteAct',
    params: {
      page: {},
      data: {}
    }
  },
  {
    name: 'activeDetail',
    method: 'POST',
    desc: '活动详情',
    path: '/vote/getVoteActDetail',
    mockpath: '/vote/getVoteActDetail',
    params: {
      actId: ''
    }
  },
  {
    name: 'vote',
    method: 'POST',
    desc: '投票',
    path: '/vote/voteAct',
    mockPath: '/vote/voteAct',
    mockEnable: false,
    params: {
      actNumber: ''
    }
  }
];
