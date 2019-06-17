// 登录界面控制器模块


// 登录界面控制器模块


angular.module('signin.controller',['signin.service'])

.controller('SigninController',function($scope,$ionicPopup,$timeout,$rootScope,$location,SigninService){
  $scope.login = function(){
    var userNumber = ""
    var userPassword = ""
    userNumber = $("#userNumber").val();
    userPassword = $("#userPw").val();
    //判断账号密码是否为空
    if(userNumber == "" || userPassword ==""){
      var failtext = '<div class="loginBody">'
        +'<p class="">账号或密码不为空</p>'
        +'</div>'
        var myPopup = $ionicPopup.show({
            cssClass:'login-popup',
            template: failtext
          });
          myPopup.then(function(res) {
            //console.log('Tapped!', res);
          });
          $timeout(function() {
             myPopup.close(); // 1秒后关闭弹窗
          }, 1000);
    }else{
    //获取登录框中的数据，并传给后台
    var data = {"userNumber":userNumber,"userPassword":userPassword};
    SigninService.getData(data,function(userDate1){
      $rootScope.userDate = userDate1;
      if($rootScope.userDate == null){
        //提示账号或密码错误
        var failtext = '<div class="loginBody">'
        +'<p class="">账号或密码错误</p>'
        +'</div>'
        var myPopup = $ionicPopup.show({
            cssClass:'login-popup',
            template: failtext
          });
          myPopup.then(function(res) {
            //console.log('Tapped!', res);
          });
          $timeout(function() {
             myPopup.close(); // 1秒后关闭弹窗
          }, 1000);
      }else{
        $location.path("/tab/account")
        sessionStorage.setItem("UserAccount",$rootScope.userDate.userPassword)
        //sessionStorage.setItem("nickName",$rootScope.userDate.nickName)
        sessionStorage.setItem("userNumber",$rootScope.userDate.userNumber)
        $scope.nickName = sessionStorage.getItem('UserAccount')
        //$scope.userUrl = sessionStorage.getItem('userUrl')
        $scope.account = sessionStorage.getItem('account')
        $("#login").text($rootScope.userDate.userName)
        console.log($rootScope.userDate.userName)
      }
      console.log($rootScope.userDate)
    });
  }
  }
})
