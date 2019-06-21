/**
 * 粉丝列表控制器模块
 */

 angular.module('fans.controller',['fans.service'])

 .controller('FansController',function($scope,$ionicPopup,FansService){
   //获取登录信息中的用户id,用于发送请求
  var followedUserId = localStorage.getItem('id');
  console.log(followedUserId);
  var data = {"followedUserId":followedUserId}
  FansService.getData(data,function(data){

  })
 })