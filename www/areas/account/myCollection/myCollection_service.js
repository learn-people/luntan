/**
 * 我的收藏服务器模块
 */

 angular.module('myCollection.service',[])

 .factory('myCollectionService',function($http,configService){
   function getData(user,callback){
     var url = configService.getHostUrl() + '/collection/selectAll.json?callback=JSON_CALLBACK';
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