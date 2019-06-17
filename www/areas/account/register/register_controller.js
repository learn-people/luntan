// 注册界面控制器
var userNum="";
var userPw = "";
var temp;
function see(){
    userNum = $("#registerNm").val();
    userPw = $("#registerPw").val();

    temp = '[{"userNumber"='+"'"+userNum+"'"+',"userPassword"='+"'"+userPw+"'"+',"userName"='+'"用户"'
    +',"imgUrl"='+'"agasf"'+',"grade"='+0+',"exp"='+0+',"jurisdiction"='+0
    +',"fansNum"='+0+',"followsNum"='+0+',"postsNum"='+0+"}]"
}


angular.module('register.controller',['register.service'])

.controller('RegisterController',function($scope,$timeout,$ionicPopup,
    RegisterService,$rootScope,$location){
    $scope.name = "hh"
    $scope.subdate = function(){
        //var sex = $('input:radio[name="sex"]:checked').val();
        //str += ",sex:"+sex+'}'
        //console.log(userNum)
        //console.log(temp)
        $rootScope.registerDate;
        RegisterService.getData(temp,function(data){
            $scope.registerDate = data;
            //注册成功后跳转到我的界面
            if($scope.registerDate == 1){
               $location.path("/tab/account")
            }else{
                //注册失败后处理
                var canceltext = '<div class="addSuccessBodyU">'
                +'<i class="icon ion-ios-close-empty addSuccessI"></i>'
                +'</div>'
                +'<div class="addSuccessBodyD">'
                +'<p>注册失败</p>'
                +'</div>'
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
            }
        })
        
    }

})

