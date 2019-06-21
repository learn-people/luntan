/**
 * 关注页面服务
 */

 angular.module('follow.service',[])

 .factory('FollowService',function($http,configService){
   return{
     getData:function(data,callback){
      $http.jsonp(url=configService.getHostUrl() + "/followed/selectOne.json?callback=JSON_CALLBACK",{
        params:data
      })
      .success(function(data){
        console.log(data)
      })
      .error(function(){
        console.log("错误，请求失败")
      })
     }
   }
 })