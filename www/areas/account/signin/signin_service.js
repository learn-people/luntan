/* 
*登录页的服务模块
*/



angular.module('signin.service',[])

.factory('SigninService',function($http,configService){
  return{
    //获取服务端购物车的数据
    getData:function(data){
      $http.jsonp(url=configService.getHostUrl() + "/user/login.json?callback=JSON_CALLBACK",{
        //传送的数据
        params:data
      })
      .success(function(data){
        if(data == null){
          console.log("账号或密码错误，请从新输入")
        }else{
          console.log(data)
        }
      })
    }
  }
})