/**
 * 发布页面的控制器模块
 */


angular.module('publish.controller',['publish.service'])


.controller('PublishController',function($scope,$ionicHistory,$cordovaCamera,publishService,
    $timeout,$ionicPopup,$cordovaImagePicker,$location){
    //返回上一页
    $scope.goBack = function(){
        $ionicHistory.goBack();
    }
    $scope.imgUrl;
    //console.log(title)
    //标题栏失去焦点时，保存之前信息
    $("#publicTitle").val(sessionStorage.getItem("publishTitle"))
    //console.log($("#publicTitle").val())
    $("#publicTitle").blur(function(){
        var title = $("#publicTitle").val()
        sessionStorage.setItem("publishTitle",title)
    }) 
    //内容失去焦点时，保存之前信息
    $("#publishTextInput").val(sessionStorage.getItem("publishtext"))
    //console.log($("#publishTextInput").val())
    $("#publishTextInput").blur(function(){
        var publishtext = $("#publishTextInput").val()
        //console.log(publishtext)
        sessionStorage.setItem("publishtext",publishtext)
    }) 
    //传输数据给后台进行插入
    var userNumber = localStorage.getItem("userNumber")
    var postTitle = $("#publicTitle").val()
    var postContent = $("#publishTextInput").val()
    var data = '[{"userNumber"='+'"'+userNumber+'"'+',"postTitle"='+'"'+postTitle+'"'
    +',"postContent"="'+postContent+'"'
    var sectionId = sessionStorage.getItem("part")
    
    $scope.publish = function(){
        var d = new Date();
        var month = d.getMonth()
        if(month<10){
            month = month +1
            month = "0" + month
        }
        var day = d.getDate()
        if(day<10){
            day = "0" + day 
        }
        var hours = d.getHours()
        if(hours<10){
            hours = "0" + hours 
        }
        var minutes = d.getMinutes()
        if(minutes<10){
            minutes = "0" + minutes 
        }
        var seconds = d.getSeconds()
        if(seconds<10){
            seconds = "0" + seconds 
        }
        var publishTime =d.getFullYear()+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds
        data += ',"posttime"="'+publishTime +'","sectionId"='+sectionId+
        ',"imgUrl"="'+$scope.imgUrl+'"}]'
        console.log(data)
        //发布存储到数据库
        if(postTitle==""||postTitle==null||postContent==""||postContent==null){
            var failtext = '<div class="loginBody">'
            +'<p class="">请补充信息完整</p>'
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
            publishService.publish(data,function(data){
                console.log(data)
                if(data == 1){
                    sessionStorage.setItem("publishtext","")
                    sessionStorage.setItem("publishTitle","")
                    sessionStorage.setItem("part","")
                    $("#publishTextInput").val("")
                    $("#publicTitle").val("")
                    var failtext = '<div class="loginBody">'
                    +'<p class="">发布成功</p>'
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
                    var failtext = '<div class="loginBody">'
                    +'<p class="">发布失败</p>'
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
                }
            })
        }
    }

    // 从相册获取图片
    $scope.openAlbum = function () {
        var options = {  
          maximumImagesCount: 1,    // 最多传几张
          width: 800,  
          height: 800,  
          quality: 80      // 图片质量
        };  
        
        $cordovaImagePicker.getPictures(options)
        .then(function(imageData) {     //获取头像图片并上传
          //  如果之前没有设置头像，那么用时间戳指定新添加头像的key
          var key = (new Date()).valueOf() + '.jpg'
          //  获取上传凭证并上传图片到七牛，imageData是Base64编码后的图片字符串
          publishService.getToken(key, function (data) {
            console.log("data.token:"+data.token)
            putb64(imageData, key, data.token)
          })
        });
      }
    // 从摄像头获取图片
    $scope.openCamera = function () {
        var options = {     // 设置图片压缩等参数
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };
        $cordovaCamera.getPicture(options).then(function (imageData) {
          //  如果之前没有设置头像，那么用时间戳指定新添加头像的key
          var  key = (new Date()).valueOf() + '.jpg'
          //  获取上传凭证并上传图片到七牛，imageData是Base64编码后的图片字符串
          publishService.getToken(key, function (data) {
            console.log("data.token:"+data.token)
            putb64(imageData, key, data.token)
          })
        });
      }
    
      // 使用base64上传模式上传到七牛
    function putb64(imageData, key, token) {
        // 获取base64编码后的图片字符串
        var picStr = imageData;
        //  计算base64编码前文件大小
        var picLength = getPicLength(imageData);
        // 这是七牛专门为base64上传模式提供的服务器url，指定key上传要进行base64加密
        var url = "http://upload.qiniup.com/putb64/" + picLength + "/key/" + window.btoa(key);
        //  这是你的七牛的空间域名
        var domain = "http://psvkcg5qy.bkt.clouddn.com/"
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {    // 监听上传响应
          if (xhr.readyState == 4) {                   // 上传成功
            console.log("上传成功")
            var data = JSON.parse(xhr.responseText)     // 获取图片key
            $scope.imgUrl = domain + data.key
            //updateUserInfo()      // 更新用户头像
          }else{
            console.log("上传失败")
          }
        }
        // 配置上传参数
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("Authorization", "UpToken " + token);    // 设置你的上传凭证，要从服务器获取
        xhr.send(picStr);   // 开始上传图片
      }
  
      // 获取图片文件大小
      function getPicLength(imageData) {
        var equalIndex = imageData.indexOf('=');
        if (imageData.indexOf('=') > 0) {
          imageData = imageData.substring(0, equalIndex);
        }
        var picLength = parseInt(imageData.length - (imageData.length / 8) * 2);
        return picLength;
      }

    //跳转到版块页面
    $scope.toplate = function(){
        $location.path("/plate")
    }
    
    //mydate中设置图像宽度与高度一致
    $(function (){
        var imgWidth = $("#imgWidth").innerHeight();
        $("#imgWidth").css('width',imgWidth);
    })

})