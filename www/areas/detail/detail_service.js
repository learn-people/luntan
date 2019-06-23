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
      //console.log(commentData);
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
  //删除评论
  function deleteData(del,callback){
    var url = configService.getHostUrl() + '/comment/delete.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:del
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误");
    })
  }
  /*********点赞操作********************************************** */
  //添加点赞
  function insertPraise(like,callback){
    var url = configService.getHostUrl() + '/praise/insert.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:like
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误");
    })
  }
  //删除点赞
  function deletePraise(like,callback){
    var url = configService.getHostUrl() + '/praise/delete.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:like
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误");
    })
  }
  //查询点赞
  function selectPraise(like,callback){
    var url = configService.getHostUrl() + '/praise/select.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:like
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误");
    })
  }
  /*********收藏操作******************************** */
  //添加收藏
  function insertCollection(collection,callback){
    var url = configService.getHostUrl() + '/collection/insert.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:collection
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误");
    })
  }
  //删除收藏
  function deleteCollection(collection,callback){
    var url = configService.getHostUrl() + '/collection/delete.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:collection
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误");
    })
  }
  //查询收藏
  function selectCollection(collection,callback){
    var url = configService.getHostUrl() + '/collection/select.json?callback=JSON_CALLBACK';
    $http.jsonp(url,{
      params:collection
    })
    .success(function(data){
      callback(data);
    })
    .error(function(){
      console.log("错误");
    })
  }

  return{
    "getData":getData,
    "getCommentData":getCommentData,
    "insertData":insertData,
    "deleteData":deleteData,
    "insertPraise":insertPraise,
    "deletePraise":deletePraise,
    "selectPraise":selectPraise,
    "insertCollection":insertCollection,
    "deleteCollection":deleteCollection,
    "selectCollection":selectCollection
  };
})