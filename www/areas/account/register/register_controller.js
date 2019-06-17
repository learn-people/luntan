// 注册界面控制器

angular.module('register.controller',['register.service'])

.controller('RegisterController',function($scope,RegisterService){
    $scope.data = {}
    $scope.str;
    $scope.see = function(){
        userNum = $("#registerNm").val();
        userPw = $("#registerPw").val();
        $scope.str = '{'+"userNumber:"+userNum+",userPassword:"+userPw+",userName:''"
        +",imgUrl:''"+",grade:''"+",exp:''"+",jurisdiction:''"
        +",'fansNum:''"+",followsNum:''"+",postsNum:''"+'}'
        console.log($scope.str)
    }
    $scope.name = "hh"

    $scope.subdate = function(){
        //var sex = $('input:radio[name="sex"]:checked').val();
        //str += ",sex:"+sex+'}'
        //console.log(str)
        //console.log(zz)
        RegisterService.getData(str);
    }

    //RegisterService.
})

