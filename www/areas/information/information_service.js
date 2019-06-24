/* 
*信息详情页面的服务器模块
*/

angular.module('information.service',[])

.factory('informationService',function($http,configService){
  function getData(temp,callback){
    var url = configService.getHostUrl() + '/comment/selectPostAll.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:temp
    })
    .success(function(data){
      callback(data);
    })
  }

  function getPostData(postId,callback){
    var url = configService.getHostUrl() + '/post/get.json?callback=JSON_CALLBACK'
      $http.jsonp(url,{
        params:postId
      })
      .success(function(postData){
        callback(postData);
      })
      .error(function(){
        console.log("错误")
      })
  }
  return {
    "getData":getData,
    "getPostData":getPostData
  }
})