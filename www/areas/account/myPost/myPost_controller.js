/**
 * 我的收藏控制器模块
 */

angular.module('myPost.controller',['myPost.service','home.service'])

.controller('MyPostController',function($scope,$state,myPostService,homeService,historyUrlService){
   var userNum = localStorage.getItem("userNumber");
   var user = {'userNum':userNum};
   myPostService.getData(user,function(data){
     console.log(data);
     $scope.post = data;
     var i = 0;
     angular.forEach($scope.post,function(img){
      console.log(i);
      console.log(data[i].imgUrl)
      if(img.imgUrl == undefined){
          data[i].imgUrl = "";
          i = i + 1;
        }else{
          i= i+1;
        }
        console.log(data[0].imgUrl);
      })
   })

   //从我的贴子界面点击跳转到贴子详情页面
   $scope.myPostToDetail = function(postId){
     //将数据挂载在hemeService服务器上
     homeService.id = postId;
     historyUrlService.setBackUrl(window.location.href);
     $state.go("detail");
     //更新后台信息
     var id = {"id":postId}
     homeService.updateLook(id);
   }
})