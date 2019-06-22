/* 
*贴子详情页面的服务器模块
*/

angular.module('detail.service',[])

.factory('detailService',function($http,configService){
  //查询贴子信息
  function getData(data,callback){
    var url = configService.getHostUrl() + '/post/get.json?callback=JSON_CALLBACK'
      $http.jsonp(url,{
        params:data
      })
      .success(function(data){
        callback(data);
      })
      .error(function(){
        console.log("错误")
      })
  }
  //查询贴子回复内容
  function getCommentData(postId,callback){
    var url = configService.getHostUrl() + '/comment/get.json?callback=JSON_CALLBACK'
    $http.jsonp(url,{
      params:postId
    })
    .success(function(commentData){
      console.log(commentData);
      callback(commentData);
    })
    .error(function(){
      console.log("错误")
    })
  }
  //添加评论
  function insertData(param,callback){
    var url = configService.getHostUrl() + '/comment/insert.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:param
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误")
    })
  }

  return{
    "getData":getData,
    "getCommentData":getCommentData,
    "insertData":insertData
  };
})