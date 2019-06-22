// 资料编辑界面
var mydata;

angular.module('mydateEdit.controller',['mydateEdit.service'])

.controller('MydateEditController',function($scope,$ionicPopup,$cordovaDatePicker,
  $timeout,$location,MydateEditService){
    console.log(localStorage.getItem("hometown"))
    window.flag = 0;    //判断是否点击保存按钮
    window.t = [0,0,0,0,0]    //判断点击修改了那个按钮
    //console.log(t)
    
  //编辑昵称
    $scope.userName = localStorage.getItem('userName')
    if(localStorage.getItem('autography')==""){
      $scope.autography = "有没有像说的呢？"
    }else{
      $scope.autography = localStorage.getItem("autography")
    }
    if(localStorage.getItem('hometown')==""){
      $scope.hometown = "无"
    }else{
      $scope.hometown = localStorage.getItem('hometown')
    }
    if(localStorage.getItem('job')==""){
      $scope.job = "选择行业"
    }else{
      $scope.job = localStorage.getItem('job')
    }
    if(localStorage.getItem('school')==""){
      $scope.school = "填写就读学校"
    }else{
      $scope.school = localStorage.getItem('school')
    }
    console.log($scope.hometown)
    //点击保存按钮
    $scope.mydateEditSave = function(){
      //用.val 和.text避免......
      flag = 1;
      //console.log(flag)
      var sex = $('input:radio[name="sex"]:checked').val();
      console.log(sex)
      var birthday = $("#mydateEditUserBir").text();
      var userName = $("#mydateEditUserName").text()
      var autography = $("#editAutography").text()
      var hometown = $("#editHome").text()
      var job = $("#editJob").text()
      var userNumber = localStorage.getItem("userNumber")
      var school = $("#editSchool").text()
      var password = localStorage.getItem("userPassword")
      //图片上传未作
      var imgUrl = localStorage.getItem("imgUrl")
      mydata = '[{"userName"='+'"'+userName+'"'+',"imgUrl"='+'"'+imgUrl+'"'//+',"birthday"='+birthday
      +',"autography"='+'"'+autography+'"'+',"sex"="'+sex+'","hometown"="'+hometown
      +'","job"="'+job+'","password"="'+password+'","school"="'+school+'","userNumber"="'+userNumber+'"}]'
      console.log(mydata)
      MydateEditService.getData(mydata,function(data){
        
        //console.log(data)
        if(data == 1){
          //修改用户信息
          localStorage.setItem('userName',userName)
          localStorage.setItem('autography',autography)
          localStorage.setItem('hometown',hometown)
          localStorage.setItem('job',job)
          localStorage.setItem('school',school)
          localStorage.setItem('sex',sex)
          localStorage.setItem('birthday',birthday)

          //弹出框提示
        var failtext = '<div class="addSuccessBodyU">'
                +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
                +'</div>'
                +'<div class="addSuccessBodyD">'
                +'<p>修改成功</p>'
                +'</div>'
        var myPopup = $ionicPopup.show({
            cssClass:'mydate-popup',
            template: failtext
          });
          myPopup.then(function(res) {
            //console.log('Tapped!', res);
          });
          $timeout(function() {
             myPopup.close(); // 1秒后关闭弹窗
             $location.path("/mydate")
          }, 1000);
        }else{
          //修改失败时的提示
          var failtext = '<div class="addSuccessBodyU">'
                +'<i class="icon  ion-ios-close-empty addSuccessI"></i>'
                +'</div>'
                +'<div class="addSuccessBodyD">'
                +'<p>修改失败</p>'
                +'</div>'
        var myPopup = $ionicPopup.show({
            cssClass:'mydate-popup',
            template: failtext
          });
          myPopup.then(function(res) {
            //console.log('Tapped!', res);
          });
          $timeout(function() {
             myPopup.close(); // 1秒后关闭弹窗
             $location.path("/mydate")
          }, 1000);
        }
      })
    }
    
    //详情信息弹出框
    $scope.edit = function(temp) {
        
        if(temp == 1){
          var placeholdertext="请输入昵称"
        }else if(temp ==2){
          var placeholdertext="请输入签名"
        }else if(temp == 3){
          var placeholdertext="请输入您的家乡"
        }else if(temp == 4){
          var placeholdertext="请输入您的职业"
        }else if(temp == 5){
          var placeholdertext="请输入您的学校"
        }
        var confirmPopup = $ionicPopup.confirm({
        cssClass:'myEdit-popup',
        title:"提示",
        template: "<input type='text' id='userInfo' placeholder='"+placeholdertext+"'>",
        cancelText:"取消",
        okText:"确认",
        scope:$scope
    });
    sessionStorage.setItem('ouserName',"")
    sessionStorage.setItem('oautography',"")
    sessionStorage.setItem('ohometown',"")
    sessionStorage.setItem('ojob',"")
    sessionStorage.setItem('oschool',"")

      confirmPopup.then(function(res) {
        if(res) {
          //console.log('You are sure');
          t = $("#userInfo").val()
          if(temp == 1){
            t[0] = 1;
            $("#mydateEditUserName").text(t)
            sessionStorage.setItem('ouserName',t)
            //console.log(sessionStorage.getItem('ouserName'))
          }else if(temp ==2){
            t[1] = 1
            $("#editAutography").text(t)
            sessionStorage.setItem('oautography',t)
          }else if(temp == 3){
            t[2] = 1
            $("#editHome").text(t)
            sessionStorage.setItem('ohometown',t)
          }else if(temp == 4){
            t[3] = 1
            $("#editJob").text(t)
            sessionStorage.setItem('ojob',t)
          }else if(temp == 5){
            t[4] = 1
            $("#editSchool").text(t)
            sessionStorage.setItem('oschool',t)
          }
      } else {
        console.log('You are not sure');
      }
      });
    }
    //判断修改了那些内容
    console.log(flag)
    if(flag == 0){
      if(t[0] == 1){
        $("#mydateEditUserName").text(sessionStorage.getItem('ouserName')+"")
      }else if(t[1] == 1){
        $("#editAutography").text(sessionStorage.getItem('oautography')+"")
      }else if(t[2] == 1){
        $("#editHome").text(sessionStorage.getItem('ohometown')+"")
      }else if(t[3] ==1){
        $("#editJob").text(sessionStorage.getItem('ojob')+"")
      }else if(t[4] ==1){
        $("#editSchool").text(sessionStorage.getItem('oschool')+"")
      }
    }
    // 从相册获取图片
    $scope.func_getPicFromPicture = function () {
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
  }
    
})
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
    //点击生日修改
    /*$scope.setBirthDay =function(){
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