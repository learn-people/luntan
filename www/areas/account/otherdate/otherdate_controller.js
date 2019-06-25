// 我的资料js

angular.module('otherdate.controller',['otherdate.service'])
.controller('OtherdateController',function($scope,$timeout,$ionicHistory,
  $ionicActionSheet,$ionicPopup,OtherdateService,$location){
    var mydateflag;
    $scope.goBack = function(){
      $ionicHistory.goBack()
      sessionStorage.getItem("tempId")
     }
    var sex;
    window.birthday;
    var toid = sessionStorage.getItem("toId")
    var id = localStorage.getItem("id")
    //检测是否关注
    console.log(toid)
    OtherdateService.checkRelation(id,toid,function(data){
      var data = data
      console.log(data)
      if(data == 1){
        mydateflag = 1;         //接受的状态 
        $("#mydateDownBtnLI").removeClass("icon ion-android-person-add")
        $("#mydateFooterL").removeClass("mydateDownBtnL button")
        $("#mydateDownBtnLI").addClass("icon ion-android-person")
        $("#mydateFooterL").addClass("mydateDownBtnL1 button")
        $("#mydateDownBtnLI").text("已关注")
      }else{
        mydateflag = -1;
        $("#mydateDownBtnLI").removeClass("icon ion-android-person")
        $("#mydateFooterL").removeClass("mydateDownBtnL1 button")
        $("#mydateDownBtnLI").addClass("icon ion-android-person-add")
        $("#mydateFooterL").addClass("mydateDownBtnL button")
        $("#mydateDownBtnLI").text("关注")
      }
    })
    OtherdateService.getData(toid,function(data){
      console.log(data)
      $scope.data = data
      $scope.postsNum = data.postsNum
      $scope.fansNum = data.followsNum
      $scope.followsNum = data.followsNum
      $scope.userName = data.userName
      var imgUrl = data.imgUrl
      $scope.imgUrl = data.imgUrl
      $scope.grade = data.grade
      sex = data.gender
      birthday = data.birthday
      $scope.age = cage(birthday)
      if(sex == "男"){
        $("#sexStyle").removeClass("sexAgeBtnGirl mydateSAB")
        $("#sexIcon").removeClass("icon ion-female")
        $("#sexStyle").addClass("sexAgeBtnBoy mydateSAB")
        $("#sexIcon").addClass("icon ion-male")
      }else if(sex =="女"){
        $("#sexStyle").removeClass("sexAgeBtnBoy mydateSAB")
        $("#sexIcon").removeClass("icon ion-male")
        $("#sexStyle").addClass("sexAgeBtnGirl mydateSAB")
        $("#sexIcon").addClass("icon ion-female")
      }
      if(imgUrl == null||imgUrl ==""){
        $scope.imgUrl = "./img/signin/steam.png"
      }
      sessionStorage.setItem("tempId",data.id)
      //获取详细信息
      //console.log(data.userNumber)
      OtherdateService.getDetailData(data.userNumber,function(detailData){
        $scope.detaildata = detailData
        $scope.autography = detailData.autography
        $scope.hometown = detailData.hometown
        $scope.school = detailData.school
        $scope.job = detailData.job
        console.log(detailData)
        //判断信息是否为空，然后进行渲染
        if($scope.autography==""||$scope.autography==null){
        $scope.autography = "因为懒所以没有签名"
        }
        if($scope.hometown == "" ||$scope.hometown==null){
        $scope.hometown = "无-无"
        }
        if($scope.job == "" ||$scope.job ==null){
        $scope.job = "打酱油的"
        }
        if($scope.school == ""||$scope.school == null){
        $scope.school = "填写学校，发现校友"
        }
      })
      //$scope.collectionNum = localStorage.getItem('collectionNum')
      //$scope.myReplyNum = localStorage.getItem('myReplyNum')
    })
    
    
    
    var cancelText;
    $(function(){
        //mydate中设置图像宽度与高度一致
        var imgWidth = $("#imgWidth").innerHeight();
        $("#imgWidth").css('width',imgWidth);
        $("#imgWidth").css('height',imgWidth);
        
        //设置我的头像大小适应屏幕
        var myphoto = $(".mydateMiddle").innerHeight();
        $("#mydatePhoto").css('width',myphoto*0.58);
        $("#mydatePhoto").css('height',myphoto*0.58);

        // if(mydateflag == 1){
        //     $("#mydateDownBtnLI").text("已关注")
            
        // }else{
        //     $("#mydateDownBtnLI").removeClass("icon ion-android-person")
        //     $("#mydateFooterL").removeClass("mydateDownBtnL1 button")
        //     $("#mydateDownBtnLI").addClass("icon ion-android-person-add")
        //     $("#mydateFooterL").addClass("mydateDownBtnL button")
        //     $("#mydateDownBtnLI").text("关注")
            
        // }
    })
    //1代表关注 -1未关注
   $scope.mydateAdd = function(){
     if(mydateflag == 1){
      canceltext = '<div class="addSuccessBodyU">'
      +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
      +'</div>'
      +'<div class="addSuccessBodyD">'
      +'<p>取消成功</p>'
      +'</div>'
       mydateflag = -1*mydateflag;
       
      $scope.showSheet();
     }else{
      canceltext = '<div class="addSuccessBodyU">'
      +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
      +'</div>'
      +'<div class="addSuccessBodyD">'
      +'<p>关注成功</p>'
      +'</div>'
      mydateflag = -1*mydateflag;
      OtherdateService.insert(id,toid,function(data){
        console.log(data)
      })
       $scope.showAdd();
       $("#mydateDownBtnLI").removeClass("icon ion-android-person-add")
       $("#mydateFooterL").removeClass("mydateDownBtnL button")
       $("#mydateDownBtnLI").addClass("icon ion-android-person")
       $("#mydateFooterL").addClass("mydateDownBtnL1 button")
       $("#mydateDownBtnLI").text("已关注")
     }
   }
   
   $scope.showSheet = function(){
     var hideSheet = $ionicActionSheet.show({
       buttons: [
         { text: '<p class="actionSheet">取消关注</p>' },
         { text: '<p class="actionSheet1">取消</p>' }
       ],
       buttonClicked: function(index) {//自定义按钮组的监听
         if(index==0){
          OtherdateService.delete(id,toid,function(data){
            //console.log(data)
            if(data == 1){
              
            }else{////
              console.log("取消失败")
            }
          })
             $scope.showAdd();
             $("#mydateDownBtnLI").removeClass("icon ion-android-person")
             $("#mydateFooterL").removeClass("mydateDownBtnL1 button")
             $("#mydateDownBtnLI").addClass("icon ion-android-person-add")
             $("#mydateFooterL").addClass("mydateDownBtnL button")
             $("#mydateDownBtnLI").text("关注")
             console.log("share");
         }else{
            mydateflag = -1*mydateflag;
           console.log("report")
          }
         return true;
       }
   });
 }
 function cage(temp){
  var age;
  var bir = temp//localStorage.getItem("birthday")+""
  var year = bir.slice(0,4)
  var month = bir.slice(5,7)
  var day = bir.slice(8,10)
  var d = new Date()
  var nyear = d.getFullYear()
  var nmonth = d.getMonth()
  var nday =d.getDate()
  if(year == nyear){
    age = 0;
  }else{
    if(month < nmonth){
      age = nyear - year
    }else if(month > nmonth){
      age = nyear - year -1
    }else{
      if(day <= nday){
        age = nyear - year
      }else{
        age = nyear - year -1
      }
    }
  }
  //console.log(age)
  return age;
}
 
 $scope.showAdd = function() {

   // 自定义弹窗
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
  };

   $scope.showConfirm1 = function() {
     var confirmPopup = $ionicPopup.confirm({
     cssClass:'myFollow-popup',
     template: "<p class='mydareConfirm'>"
     +"是否举报用户资料"
     +"</p>",
     cancelText:"否",
     okText:"是",
     scope:$scope
 });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       
   } else {
     console.log('You are not sure');
   }
   });
 }
})

