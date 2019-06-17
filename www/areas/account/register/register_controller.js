// 注册界面控制器
 var userNum="";
var userPw = "";
var temp;
function see(){
    userNum = $("#registerNm").val();
    userPw = $("#registerPw").val();
    temp = '[{"userNumber"='+"'"+userNum+"'"+',"userPassword"='+"'"+userPw+"'"
    +',"imgUrl"='+'"agasf"'+',"grade"='+0+',"exp"='+0+',"jurisdiction"='+0
    +',"fansNum"='+0+',"followsNum"='+0+',"postsNum"='+0+"}]"
} 


angular.module('register.controller',['register.service'])

.controller('RegisterController',function($scope,RegisterService){
    
    $scope.subdate = function(){
        $scope.registerDate;
        console.log(temp);
        RegisterService.getData(temp,function(data){
            $scope.registerDate = data;
            //console.log(registerDate);
        })
        console.log($scope.registerDate)
        // if(registerDate == 1){
        //     alert("zz")
        // }
    }

})

//自定义表单验证
.directive('ensureUnique', ['$http','$timeout','$window',function($http,$timeout,$window) {
    return {
        restrict:"A",
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModelController) {
            scope.$watch(attrs.ngModel, function(n) {
                if (!n) return;
                $timeout.cancel($window.timer);
                $window.timer = $timeout(function(){
                    url = 'http://127.0.0.1:8080/luntanSSM' + '/user/checkNumber.json?callback=JSON_CALLBACK', //根据换成自己的url
                    $http.jsonp(url,{
                        params:{
                            "userNumber":n
                        }
                    }).success(function(data) {
                        if(data){
                            ngModelController.$setValidity('unique', false); //这个取决于你返回的，其实就是返回一个是否正确的字段，具体的这块可以自己修改根据自己的项目
                        }else{
                            ngModelController.$setValidity('unique', true);
                        }
                    }).error(function(data) {
                        ngModelController.$setValidity('unique', false);
                    });
                },100);
            });
        }
    };
}]);

