// 注册界面控制器
var userNum="";
var userPw = "";
var temp;
function see(){
    userNum = $("#registerNm").val();
    userPw = $("#registerPw").val();

    temp = '[{"userNumber"='+"'"+userNum+"'"+',"userPassword"='+"'"+userPw+"'"+',"userName"='+'"用户"'
    +',"imgUrl"='+'"agasf"'+',"grade"='+0+',"exp"='+0+',"jurisdiction"='+0
    +',"fansNum"='+0+',"followsNum"='+0+',"postsNum"='+0
}


angular.module('register.controller',['register.service'])

.controller('RegisterController',function($scope,$timeout,$ionicPopup,
    RegisterService,$rootScope,$location,$cordovaCamera){
    
    $scope.name = "hh"
    $scope.subdate = function(){
        var sex = $('input:radio[name="sex"]:checked').val();
        temp += ',"gender"="'+sex+'"}]'
        //str += ",sex:"+sex+'}'
        //console.log(userNum)
        console.log(temp)
        $rootScope.registerDate;
        RegisterService.getData(temp,function(data){
            $scope.registerDate = data;
            //注册成功后跳转到我的界面
            if($scope.registerDate == 1){
                //注册成功后处理
                localStorage.setItem("userNumber",userNum)
                localStorage.setItem("userPassword",userPw)
                localStorage.setItem("sex",sex)
                /**/ 
                //localStorage.setItem("birthday",birthday)
                //localStorage.setItem("imgUrl",imgUrl)
                var canceltext = '<div class="addSuccessBodyU">'
                +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
                +'</div>'
                +'<div class="addSuccessBodyD">'
                +'<p>注册成功</p>'
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
                     $location.path("/tab/account")
                  }, 800);
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
    // 从相册获取图片
    var options;
    $scope.func_getPicFromPicture = function () {
          options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };
    }
    // $cordovaCamera.getPicture(options).then(function (imageData) {
    //     var image = document.getElementById('touxiang');
    //     image.src = "data:image/jpeg;base64," + imageData;
    //     localStorage["touxiang"] = imageData;
    //   });

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

//生日配置    android 已实现
   /* var options = {
      date: new Date(),
      mode: 'date', // or 'time'
      maxDate: new Date() - 10000,
      allowOldDates: true,
      //allowFutureDates: false,
      doneButtonLabel: 'DONE',
      doneButtonColor: '#F2F3F4',
      cancelButtonLabel: 'CANCEL',
      cancelButtonColor: '#000000',
      androidTheme:window.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    };*/
    /*$scope.registerBirthday = function(){
        $cordovaDatePicker.show(options).then(function(date){
            var str = date+""
            var day = str.slice(8,10)
            var d = new Date(date);
            var year = d.getUTCFullYear()
            var month = d.getUTCMonth()+1
            if (month < 10) {
              month = "0" + month;
            }
            $scope.date = ""+year+"-"+month+"-"+day+""
        })
    }*/