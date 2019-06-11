/* 
*我的标签页的控制器模块
*/

angular.module('account.controller',[])

.controller('AccountController',function($scope,$ionicHistory){
  $scope.test = 0
  $scope.test1 = 1
  $scope.userName = "hhh"
  $scope.year = 19
  $scope.month = 6
  $scope.day = 10
  $scope.uploads = function(id){
    //上传头像图片
    $("#"+id).trigger("click");
        openuploads(id);
  }
  $scope.doRefresh = function(){
    //下拉刷新数据
    $scope.$broadcast('scroll.refreshComplete')
  }
  $scope.zz = function(){
    alert("zz");
  }

  //返回上一页
  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
  $(function (){
    //mydate中设置图像宽度与高度一致
    var imgWidth = $("#imgWidth").innerHeight();
    $("#imgWidth").css('width',imgWidth);

    //我的帖子 获取宽度并设置图片大小
    var myPostWidth = $(".myPostPartMiddleImg").innerWidth();
    var myPostImgWidth = (myPostWidth*0.9)/4;
    console.log(myPostImgWidth)
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

  //点击添加图片按钮效果
  $scope.changeEditAddBtnBg= function(temp){
    temp.style.background = "#fff";
  }
})

function openuploads(id){
    
}

function changeEditAddBtnBg(temp){
  temp.style.background = "#fff";
  setTimeout(function(){ 
    temp.style.background = "";
   },150)
}