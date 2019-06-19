/* 
* 首页的服务器模块
*/

angular.module('home.service',[])

.factory('homeService',function($http,configService){
  return{
    getData:function(callback){
      //访问贴子信息数据的接口
      var url = configService.getHostUrl() + '/post/selectAll.json?callback=JSON_CALLBACK'
      $http.jsonp(url)
        .success(function(data){
          callback(data)
        })
    }
  }
})

