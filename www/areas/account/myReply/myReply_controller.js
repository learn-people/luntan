/**
 * 我的回复控制器模块
 */

angular.module('myReply.controller',['myReply.service','home.service'])

.controller('MyReplyController',function($scope,$state,myReplyService,homeService,historyUrlService){
   var userNum = localStorage.getItem("userNumber");
   var user = {'userNum':userNum};
   myReplyService.getData(user,function(data){
     console.log(data);
     $scope.reply = data;
   })

   //从我的贴子界面点击跳转到贴子详情页面
   $scope.replyToDetail = function(postId){
     //将数据挂载在hemeService服务器上
     homeService.id = postId;
     historyUrlService.setBackUrl(window.location.href);
     $state.go("detail");
     //更新后台信息
     var id = {"id":postId}
     homeService.updateLook(id);
   }
})