/**
 * 我的回复服务器模块
 */

angular.module('myReply.service',[])

.factory('myReplyService',function($http,configService){
  function getData(user,callback){
    var url = configService.getHostUrl() + '/comment/selectUserAll.json?callback=JSON_CALLBACK'
    $http.jsonp(url,{ 
      params:user
     })
     .success(function(data){
       callback(data)
     })
     .error(function(){
       console.log("错误")
     })
  }

  return {
    "getData":getData
  }
})