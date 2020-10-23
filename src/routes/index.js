

//const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);

const Home = resolve => require(['../pages/home'], resolve);
const noData = resolve => require(['../pages/home/noData'], resolve);
const myWelink = resolve => require(['../pages/home/myWelink'], resolve);

const AfirstPage = resolve => require(['../pages/home/AfirstPage'], resolve);
//
const Share = resolve => require(['../pages/test/share'], resolve);
const Sign = resolve => require(['../pages/test/sign'], resolve);


export default [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/noData',
      name: 'noData',
      component : noData
    },{
      path: '/myWelink',
      name: 'myWelink',
      component: myWelink
    }
    ,
    {
      path: '/AfirstPage',
      name: 'AfirstPage',
      component: AfirstPage
    }
    ,
    {
      path: '/share',
      name: 'share',
      component: Share
    }
    ,
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    }
  ];
