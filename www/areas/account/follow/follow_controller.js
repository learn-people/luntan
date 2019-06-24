// 关注界面控制器

angular.module('follow.controller',['follow.service'])

.controller('FollowController',function($scope,$ionicPopup,FollowService,$location){
    var followBtn;
    var followBtn1;
    $scope.toOther = function(id){
      $location.path("/otherdate")
      sessionStorage.setItem("toId",id)
    }
    //window.followData =null;
    //获取登录的信息中的id,用于查询用户的关注列表以及粉丝列表
    var userId = localStorage.getItem('id');
    //console.log(userId);
    var data = {"userId":userId}
    //计算年龄
    function cage(bir){
      var age;
      var year = bir.slice(0,4)
      var month = bir.slice(5,7)
      var day = bir.slice(8,10)
      var d = new Date()
      var nyear = d.getFullYear()
      var nmonth = d.getMonth()+1
      var nday =d.getDate()
      if(year == nyear){
        age = 0;
      }else{
        if(month < nmonth){
          age = nyear - year
        }else if(month > nmonth){
          age = nyear - year -1
        }else{
          if(day <= nday){
            age = nyear - year
          }else{
            age = nyear - year -1
          }
        }
      }
      return age;
    }
    FollowService.getData(data,function(data){
      $scope.data = data
      var followData = data
      console.log(followData)
      followBtn = []
      followBtn1 = []
      var arr = []
      for(var i=0;i<followData.length;i++){
        //var id = followData[i].id
        var age = cage(followData[i].birthday)
        arr.push(age)
        followBtn.push(followData[i].id)
        followBtn1.push(1)
        if(followData[i].imgUrl == null||followData[i].imgUrl==""){
          followData[i].imgUrl = "./img/signin/steam.png"
        }
        
      }
      $scope.age = arr;
      //console.log(arr);
    })
    //点击关注/已关注按钮
    $scope.showConfirm = function(id,name) {
      //判断点击那个按钮
      var temp;
        for(var i=0;i<followBtn1.length;i++){
          if(followBtn[i] == id){
            temp = i
            console.log(i)
          }
        }
        followBtn1[temp] = -1*followBtn1[temp]
        if(followBtn1[temp] == -1){
        var confirmPopup = $ionicPopup.confirm({
            cssClass:'myFollow-popup',
            template: "<div class='followBody'>"
            +"<p class='popupContent'>"
            +"您是否取消对"+name+"关注,取消后您将无法看到其最新动态<p>"
            +"</div>",
            cancelText:"否",
            okText:"是",
            scope:$scope
        });
        confirmPopup.then(function(res) {
          if(res) {
            console.log('You are sure');
            $("#myfollowBtn"+id).text("关注");
            $("#myfollowBtn"+id).css('color',"#F9F900");
            $("#myfollowBtn"+id).css('border',"1px solid #F9F900");
          } else {
            followBtn1[temp] = -1*followBtn1[temp];
            console.log('You are not sure');
          }
        });
      }else{
        $("#myfollowBtn"+id).text("已关注");
        $("#myfollowBtn"+id).css('color',"#ADADAD");
        $("#myfollowBtn"+id).css('border',"1px solid #ADADAD");
    }
  }
})