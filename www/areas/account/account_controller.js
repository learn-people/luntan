/* 
*我的标签页的控制器模块
*/

angular.module('account.controller',[])

.controller('AccountController',function($scope,$ionicHistory){
  $scope.test = 0
  $scope.test1 = 1
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
  //mydate中设置图像宽度与高度一致
  $(function (){
    var imgWidth = $("#imgWidth").innerHeight();
    $("#imgWidth").css('width',imgWidth);
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