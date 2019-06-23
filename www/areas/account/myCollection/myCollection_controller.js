/**
 * 我的收藏控制器模块
 */

 angular.module('myCollection.controller',['myCollection.service','home.service'])

 .controller('MyCollectionController',function($scope,$state,myCollectionService,homeService,historyUrlService){
    var userNum = localStorage.getItem("userNumber");
    var user = {'userNum':userNum};
    myCollectionService.getData(user,function(data){
      console.log(data);
      $scope.collection = data;
    })

    //从收藏界面点击跳转到贴子详情页面
    $scope.toDetail = function(postId){
      //将数据挂载在hemeService服务器上
      homeService.id = postId;
      historyUrlService.setBackUrl(window.location.href);
      $state.go("detail");
      //更新后台信息
      var id = {"id":postId}
      homeService.updateLook(id);
    }
 })