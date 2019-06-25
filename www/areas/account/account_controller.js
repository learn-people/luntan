/* 
*我的标签页的控制器模块
*/

angular.module('account.controller',['account.service','fans.service','follow.service'])

.controller('AccountController',function($scope,$timeout,$ionicPopup,FollowService
  ,$ionicHistory,$location,AccountService){
  $scope.test = 0
  $scope.test1 = 1
  //$scope.userName = "hhh"
  $scope.year = 19
  $scope.month = 6
  $scope.day = 10
  //$scope.imgUrl = "img/account/login.png"
  //获得登录信息
  var id = localStorage.getItem("id")
  // 自定义弹窗
  
  $scope.changePw = function(){
    if(localStorage.getItem("statue") == 0){
      //处与未登录状态
    }else{
    var oldPw = $("#oldPw").val()
    var newPw = $("#newPw").val()
    var newPw1 = $("#newPw1").val()
    if(newPw != newPw1){
      //新密码不一致
      var canceltext = canceltext = "<div class='followBody'>"
      +"<p class='popupContent'>"
      +"密码不一致<p>"
      +"</div>"
      var myPopup = $ionicPopup.show({
        cssClass:'myFollow-popup',
        template: canceltext
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      $timeout(function() {
         myPopup.close(); // 1秒后关闭弹窗
      }, 800);
    }else{
    AccountService.check(id,oldPw,function(data){
      if(data == 1){
        //更改密码
        AccountService.change(id,newPw,function(data){
          if(data == 1){
            var canceltext = canceltext = "<div class='followBody'>"
      +"<p class='popupContent'>"
      +"更新成功<p>"
      +"</div>"
      var myPopup = $ionicPopup.show({
        cssClass:'myFollow-popup',
        template: canceltext
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      $timeout(function() {
        $location.path("/tab/account")
         myPopup.close(); // 1秒后关闭弹窗
      }, 800);
          }
        })
      }else{
        //原密码不对
        var canceltext = canceltext = "<div class='followBody'>"
      +"<p class='popupContent'>"
      +"密码错误<p>"
      +"</div>"
      var myPopup = $ionicPopup.show({
        cssClass:'myFollow-popup',
        template: canceltext
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      $timeout(function() {
         myPopup.close(); // 1秒后关闭弹窗
      }, 800);
      }
    })
  }
}
}
  var statue = localStorage.getItem('statue')
  var userName = localStorage.getItem('userName')
  var imgUrl = localStorage.getItem('imgUrl')
  $scope.fansNum = localStorage.getItem('fansNum')
  $scope.followsNum = localStorage.getItem('followsNum')
  console.log(statue)
  //设置js
  $scope.signOut = function(){
    localStorage.setItem('statue',0);
    localStorage.setItem('imgUrl',"img/account/login.png")
    localStorage.setItem("grade",0)
    localStorage.setItem("exp",0)
    localStorage.setItem("jurisdiction",0)
    localStorage.setItem("fansNum",0)
    localStorage.setItem("followsNum",0)
    localStorage.setItem("postsNum",0)
    localStorage.setItem('collectionNum',0)
    localStorage.setItem('myReplyNum',0)
    $location.path("/tab/account")
  }
  $(function (){
    //判断登录状态
    $('mydateFooter').addClass('hidden');
    if(statue == 1){
      $("#loginUserName").text(userName);
      $scope.imgUrl =imgUrl;
      $scope.accountUrl = "#/mydate"
      //$('mydateFooter').addClass('hidden');
      //FansService.get
    }else{
      $("#loginUserName").text("登录/注册");
      $scope.imgUrl = imgUrl;
      $scope.accountUrl = "#/signin"
     
    }
    //获取手机屏幕高度 
   // var phoneHeight = window.screen.availHeight;
    //我的帖子 获取宽度并设置图片大小
    var myPostWidth = $(".myPostPartMiddleImg").innerWidth();
    var myPostImgWidth = (myPostWidth*0.9)/4;
    $(".myPostImg").css('width',myPostImgWidth);
    $(".myPostImg").css('height',myPostImgWidth);
    $(".myPostImg").css('margin-left',myPostImgWidth*0.08);
    $(".myPostImg1").css('width',myPostImgWidth);
    $(".myPostImg1").css('height',myPostImgWidth);
    $(".myPostPartMiddleImg").css('height',myPostImgWidth);

    //myReply界面
    var myReply = $(".myReplyPart").innerWidth();
    $(".replyThing").css('margin-left',myReply*0.02+55);
    $(".replyThing").css('width',myReply*0.96-55);
    $(".oldContent").css('width',myReply*0.96-55);
    $(".oldContent").css('margin-left',myReply*0.02+55);

  })
   
  $scope.uploads = function(id){
    //上传头像图片
    $("#"+id).trigger("click");
        openuploads(id);
  }
  $scope.doRefresh = function(){
    //下拉刷新数据
    $scope.$broadcast('scroll.refreshComplete')
  }
 
  //返回上一页
  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
  //点击添加图片按钮效果
  $scope.changeEditAddBtnBg= function(temp){
    temp.style.background = "#fff";
  }
})



function changeEditAddBtnBg(temp){
  temp.style.background = "#fff";
  setTimeout(function(){ 
    temp.style.background = "";
   },150)
}