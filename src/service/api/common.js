/**
 * @Author: Hexon
 * @Date: 2018/12/7 上午11:08
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/12/7 上午11:08
 * @description:
 */
export default [
  {
    name: 'wxsignature',
    method: 'post',
    desc: '获取微信签名',
    path: '/wx/signature',
    mockpath: '/wx/signature',
    params: {
      url: ''
    }
  },
  {
    name: 'getToken',
    method: 'post',
    desc: '网页鉴权',
    path: '/auth',
    mockpath: '/auth',
    params: {
      code: ''
    }
  },
  {
    name: 'getDictListByType',
    method: 'POST',
    desc: '数据字典根据类别获取数据',
    path: '/dict/getDictListByType',
    mockPath: '/dict/getDictListByType',
    params: {
      type: '',
      language: ''
    }
  }
];
