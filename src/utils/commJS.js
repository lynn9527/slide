//获取个人信息
// 'user/details'
export function getUserInfo(parameter){
  let userInfo = sessionStorage.getItem('userInfo');
  if(userInfo !== "undefined" && userInfo !== null){ //启用缓存
    parameter = JSON.parse(userInfo);
  }else{
    this.$api['user/details']({})
      .then(res => {
        if (res.code === 200) {
          sessionStorage.setItem('userInfo', JSON.stringify(res.result));
        }
      })
      .catch(err => {
        // alert(`Failed to get personal information: ${err.message}`)
        console.error(err.message);
      });
  }
}


