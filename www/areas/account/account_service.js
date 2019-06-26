/* 
* 我的的服务器模块
*/

angular.module('account.service',['config'])

.factory('AccountService',function($http,configService){
  return{
    check:function(id,oldPw,callback){
     $http.jsonp(url=configService.getHostUrl() + "/user/check.json?callback=JSON_CALLBACK",{
       params:{"id":id,"oldPw":oldPw}
     })
     .success(function(data){
       //console.log(data)
       //var resultData = JSON.stringify(data)
       //var resultData1 = JSON.parse(resultData)
       callback(data)
     })
     .error(function(){
       console.log("错误，请求失败")
     })
    },
    change:function(id,newPw,callback){
     $http.jsonp(url=configService.getHostUrl() + "/user/change.json?callback=JSON_CALLBACK",{
       params:{"id":id,"newPw":newPw}
     })
     .success(function(data){
       //console.log(data)
       //var resultData = JSON.stringify(data)
       //var resultData1 = JSON.parse(resultData)
       callback(data)
     })
     .error(function(){
       console.log("错误，请求失败")
     })
    },
    get:function(id,oldPw,callback){
     $http.jsonp(url=configService.getHostUrl() + "/followed/selectOne.json?callback=JSON_CALLBACK",{
       params:{"id":id,"oldPw":oldPw}
     })
     .success(function(data){
       //console.log(data)
       //var resultData = JSON.stringify(data)
       //var resultData1 = JSON.parse(resultData)
       callback(data)
     })
     .error(function(){
       console.log("错误，请求失败")
     })
    }
  }
})