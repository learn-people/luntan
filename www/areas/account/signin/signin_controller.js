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
    SigninService.getData(data,function(userDate){
      //session.setAttribute("userDate",userDate);
      $rootScope.userDate = userDate;
      console.log(userDate)
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
        //设置session状态
        localStorage.setItem("id",userDate.id)
        //console.log(localStorage.getItem("id"))
        localStorage.setItem("userNumber",userDate.userNumber)
        //console.log(localStorage.getItem("userNumber"))
        localStorage.setItem("userPassword",userDate.userPassword)
        localStorage.setItem("userName",userDate.userName)
        localStorage.setItem("imgUrl",userDate.imgUrl)
        localStorage.setItem("grade",userDate.grade)
        localStorage.setItem("exp",userDate.exp)
        localStorage.setItem("jurisdiction",userDate.jurisdiction)
        localStorage.setItem("fansNum",userDate.fansNum)
        localStorage.setItem("followsNum",userDate.followsNum)
        localStorage.setItem("postsNum",userDate.postsNum)
        
        //改变登录状态
        localStorage.setItem("statue",1)
        //console.log(localStorage.getItem("statue"))

      }
    });
  }
  }
})
