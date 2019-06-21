// 关注界面控制器

angular.module('follow.controller',['follow.service'])

.controller('FollowController',function($scope,$ionicPopup,FollowService){
    $scope.userName = "hh";
    var followBtn = 1;
    $scope.test = 12;
    //获取登录的信息中的id,用于查询用户的关注列表以及粉丝列表
    var userId = localStorage.getItem('id');
    console.log(userId);
    var data = {"userId":userId}
    FollowService.getData(data,function(data){

    })
    //点击关注/已关注按钮
    $scope.showConfirm = function() {
        followBtn = -1*followBtn;
        if(followBtn == -1){
        var confirmPopup = $ionicPopup.confirm({
            cssClass:'myFollow-popup',
            template: "<div class='followBody'>"
            +"<p class='popupContent'>"
            +"您是否取消对{{userName}}关注,取消后您将无法看到其最新动态<p>"
            +"</div>",
            cancelText:"否",
            okText:"是",
            scope:$scope
        });
        confirmPopup.then(function(res) {
          if(res) {
            console.log('You are sure');
            $("#myfollowBtn").text("关注");
            $("#myfollowBtn").css('color',"#F9F900");
            $("#myfollowBtn").css('border',"1px solid #F9F900");
          } else {
            followBtn = -1*followBtn;
            console.log('You are not sure');
          }
        });
      }else{
        $("#myfollowBtn").text("已关注");
        $("#myfollowBtn").css('color',"#ADADAD");
        $("#myfollowBtn").css('border',"1px solid #ADADAD");
    }
  }
})