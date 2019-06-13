// 我的资料js

angular.module('mydate.controller',[])
.controller('MydateController',function($scope,$timeout,$ionicHistory,$ionicActionSheet,$ionicPopup){
    $scope.test = 0
    $scope.test1 = 1
    $scope.userName = "hhh"
    var mydateflag = 0;         //接受的状态
    $(function(){
        //mydate中设置图像宽度与高度一致
        var imgWidth = $("#imgWidth").innerHeight();
        $("#imgWidth").css('width',imgWidth);
        $("#imgWidth").css('height',imgWidth);
        
        //设置我的头像大小适应屏幕
        var myphoto = $(".mydateMiddle").innerHeight();
        $("#mydatePhoto").css('width',myphoto*0.58);
        $("#mydatePhoto").css('height',myphoto*0.58);

        if(mydateflag == 1){
            $("#mydateDownBtnLI").text("已关注")
        }else{
            $("#mydateDownBtnLI").removeClass("icon ion-android-person")
            $("#mydateFooterL").removeClass("mydateDownBtnL1 button")
            $("#mydateDownBtnLI").addClass("icon ion-android-person-add")
            $("#mydateFooterL").addClass("mydateDownBtnL button")
            $("#mydateDownBtnLI").text("关注")
        }
    })
    //1代表关注 -1未关注
   $scope.mydateAdd = function(){
     if(mydateflag == 1){
       $scope.showSheet();
     }else{
       $scope.showAdd();
       $("#mydateDownBtnLI").removeClass("icon ion-android-person-add")
       $("#mydateFooterL").removeClass("mydateDownBtnL button")
       $("#mydateDownBtnLI").addClass("icon ion-android-person")
       $("#mydateFooterL").addClass("mydateDownBtnL1 button")
       $("#mydateDownBtnLI").text("已关注")
     }
   }
   
   $scope.showSheet = function(){
     var hideSheet = $ionicActionSheet.show({
       buttons: [
         { text: '<p class="actionSheet">取消关注</p>' },
         { text: '<p class="actionSheet1">取消</p>' }
       ],
       buttonClicked: function(index) {//自定义按钮组的监听
         if(index==0){
             $scope.showAdd();
             $("#mydateDownBtnLI").removeClass("icon ion-android-person")
             $("#mydateFooterL").removeClass("mydateDownBtnL1 button")
             $("#mydateDownBtnLI").addClass("icon ion-android-person-add")
             $("#mydateFooterL").addClass("mydateDownBtnL button")
             $("#mydateDownBtnLI").text("关注")
             console.log("share");
         }else{console.log("report")}
         return true;
       }
   });
 }
   if(mydateflag == 1){
     var canceltext = '<div class="addSuccessBodyU">'
     +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
     +'</div>'
     +'<div class="addSuccessBodyD">'
     +'<p>取消成功</p>'
     +'</div>'
   }else{
     var canceltext = '<div class="addSuccessBodyU">'
     +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
     +'</div>'
     +'<div class="addSuccessBodyD">'
     +'<p>关注成功</p>'
     +'</div>'
   }
 
 $scope.showAdd = function() {

   // 自定义弹窗
   var myPopup = $ionicPopup.show({
     cssClass:'mydate-popup',
     template: canceltext
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); // 1秒后关闭弹窗
   }, 800);
  };

   $scope.showConfirm1 = function() {
     var confirmPopup = $ionicPopup.confirm({
     cssClass:'myFollow-popup',
     template: "<p class='mydareConfirm'>"
     +"是否举报用户资料"
     +"</p>",
     cancelText:"否",
     okText:"是",
     scope:$scope
 });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       
   } else {
     console.log('You are not sure');
   }
   });
 }
})

