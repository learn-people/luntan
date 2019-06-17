// 登录界面控制器模块


angular.module('signin.controller',['signin.service'])

.controller('SigninController',function($scope,SigninService){
  $scope.login = function(){
    var userNumber = $("#userNumber").val();
    var userPassword = $("#userPw").val();
    //获取登录框中的数据，并传给后台
    var data = {"userNumber":userNumber,"userPassword":userPassword};
    SigninService.getData(data);
    //RegisterService.getData(user);
  }
})