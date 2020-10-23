

export async function routerBeforeEachFunc(to, from, next) {

  let ajax = {
    post: (url, params) => {
      return new Promise((resolve, inject) => {
        gGlobal.ajax
          .post(url, params)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            inject(err);
          });

      });
    },
    get: (url, params) => {
      return new Promise((resolve, inject) => {
        gGlobal.ajax
          .get(url + params, {})
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            inject(err);
          });

      });
    },
    getCookie: (name) => {
      let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
      if (arr != null) {
        return unescape(arr[2]);
      }
      return null;
    },
    getTokenName: (name) => {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = window.location.hash.substr(3).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;

    }
  };

  let isGetToken = false,
    mannjuToken = '',
    code = ajax.getTokenName('mannjuToken');
  // if(code){//存在时表示为分享链接进入

  // }else{//正常流程
  //   mannjuToken = ajax.getCookie('mannjuToken');//从cookie取token
  //   if(mannjuToken){
  //     let userId = ajax.getCookie('userId'),
  //         empLobNum = `0000000000${String(userId)}`,
  //         lobNumber = empLobNum.substr(String(userId).length);
  //     sessionStorage.setItem('lobNumber', lobNumber);
  //     //用户数据
  //     let result = await ajax.get('/selectEmployeeBill.action',`?behavior=1&empLobNum=${lobNumber}`),
  let result = {
    msg: 'success',
    data: {
      approves: {
        formula: 'b'
      },
      bussinessDays: {
        formula: 'd'
      },
      clock: {
        formula: 'd'
      },
      entryYear: {
        formula: 'd'
      },
      mMoves: {
        formula: 'a'
      },
      maxScore: {
        formula: 'b'
      },
      overtimeDays: {
        formula: 'b'
      },
      postNumber: {
        formula: 'd'
      },
      workDaysPer: {
        formula: 'c'
      },
      marriage: {
        formula: 'b'
      },
      maternity:{
        formula: 'a1'
      },
      templateSort: [
        'entryYear',
        'workDaysPer',
        'marriage',
        'maternity',
        'clock',
        'overtimeDays',
        'approves',
        'bussinessDays',
        'maxScore',
        'mMoves',
        'postNumber',
        'sharePage'
      ],
      employeeInfo: {
        approves: 4,
        businesscitys: 0,
        businessdays: 0,
        businessdaysper: 0,
        circles: 0,
        departments: 2,
        empId: 'E100097716',
        empLobNum: '0000076916',
        empName: '陈润坤',
        entryDt: '2016-09-26',
        entryDtStr: '2016年09月26日',
        entrydays: 1192,
        examnumber: 0,
        executiveFlag: 0,
        genCd: '1',//性别
        id: 8818,
        itemnumber: 2,
        labelStr: '能征敢战 活力四射',
        maxscore: 0,
        overtimedaysper: 89,
        postnumber: 0,
        pushdate: '2020-01-08',
        rangeApproves: 'b',
        rangBusinessdays: 'd',
        rangClock: 'd',
        rangEntryyear: 'd',
        rangFans: 'b',
        rangMarriage: 'd',
        rangMaxscore: 'b',
        rangMoves: 'a',
        rangOvertimedays: 'b',
        rangPostnumber: 'd',
        rangWorkdaysper: 'c',
        reviews: 0,
        workdaysper: 98
      }
    }




  };

  let { msg, data } = result;
  if (msg === 'success') {
    if (data.templateSort && data.templateSort.length) {

      sessionStorage.setItem('summaryData', JSON.stringify(data));
      sessionStorage.setItem('summaryTemplate', JSON.stringify(data.templateSort));

      isGetToken = true;

    } else {//无数据
      isGetToken = false;
    }
  } else {//无效工号
    isGetToken = false;
  }

  //   }else{//正常分享直接进入
  //     isGetToken = true;

  //   }


  // }






  if (isGetToken) {
    next();
  } else {
    if (to.path == '/noData' || to.path == '/myWelink') {
      next();
    } else {
      next({ path: '/noData' });
    }
  }


}

export function routerAfterEachFunc(to) {
  // 页面跳转触发事件给app.vue，用于计算导航信息
  gGlobal.vbus.$emit('router.update', to.path);
}
