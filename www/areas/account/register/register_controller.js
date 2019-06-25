// 注册界面控制器
var userNum="";
var userPw = "";
var temp;



angular.module('register.controller',['register.service'])

.controller('RegisterController',function($scope,$timeout,$ionicPopup,
    RegisterService,$rootScope,$location,$cordovaCamera,$cordovaDatePicker){
        $scope.see = function(){
            userNum = $("#registerNm").val();
            userPw = $("#registerPw").val();
            console.log(userNum)
            temp = '[{"userNumber"='+"'"+userNum+"'"+',"userPassword"='+"'"+userPw+"'"+',"userName"='+'"用户"'
            +',"imgUrl"="'+"test"+'","grade"='+0+',"exp"='+0+',"jurisdiction"='+0
            +',"fansNum"='+0+',"followsNum"='+0+',"postsNum"='+0
            $location.path("/registerDetail")
        }
        $scope.sex = "./img/defaultphoto/2.png"
        //选择男或女时更改默认图像
        $(":radio").click(function(){
            // console.log($(this).val())
            // console.log($scope.sex)
            if($(this).val()=="男"){
                $scope.sex = "./img/defaultphoto/2.png"
                localStorage.setItem("imgUrl",$scope.sex)
            }else{
                $scope.sex = "./img/defaultphoto/3.png"
                localStorage.setItem("imgUrl",$scope.sex)
            }
            
           });
    //生日配置    android 已实现
    var options = {
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
    };
    if(status == 0){
    //var d = new Date();
    localStorage.setItem('birthday',"2019-06-23")
    $scope.date = localStorage.getItem('birthday')
    }
    $scope.registerBirthday = function(){
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
            console.log(d.getDate())
        })
    }
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
                localStorage.setItem("userName","用户")
                /**/ 
                localStorage.setItem("birthday",$scope.date)
                //localStorage.setItem("imgUrl",$scope.imgUrl)
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
   
    // 从相册获取图片
    $scope.chosePhoto = function(){
        var options = {
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
          
        $cordovaCamera.getPicture(options).then(function (imageData) {
        var image = document.getElementById('photo');
        image.src = "data:image/jpeg;base64," + imageData;
        localStorage["photo"] = imageData;
        $scope.imgUrl = imageData;
      });
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
                    url = 'http://192.168.43.48:8080/luntanSSM' + '/user/checkNumber.json?callback=JSON_CALLBACK', //根据换成自己的url
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

