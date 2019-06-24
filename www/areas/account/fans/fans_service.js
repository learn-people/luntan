/**
 * 粉丝列表服务模块
 */

angular.module('fans.service',[])

.factory('FansService',function($http,configService){
  return{
    getData:function(data,callback){
     $http.jsonp(url=configService.getHostUrl() + "/fans/selectOne.json?callback=JSON_CALLBACK",{
       params:data
     })
     .success(function(data){
       //console.log(data)
      var resultData = JSON.stringify(data)
      var resultData1 = JSON.parse(resultData)
      callback(resultData1)
     })
     .error(function(){
       console.log("错误，请求失败")
     })
    }
  }
})