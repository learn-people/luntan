/**
 * 粉丝列表控制器模块
 */

 angular.module('fans.controller',['fans.service'])

 .controller('FansController',function($scope,$ionicPopup,FansService,$location){
   //获取登录信息中的用户id,用于发送请求
   $scope.toOther = function(id){
    $location.path("/otherdate")
    sessionStorage.setItem("toId",id)
  }
  var followedUserId = localStorage.getItem('id');
  console.log(followedUserId);
  var data = {"followedUserId":followedUserId}
  function cage(bir){
    var age;
    var year = bir.slice(0,4)
    var month = bir.slice(5,7)
    var day = bir.slice(8,10)
    var d = new Date()
    var nyear = d.getFullYear()
    var nmonth = d.getMonth()+1
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
    return age;
  }
  FansService.getData(data,function(data){
    $scope.data = data
    console.log(data)
    var fansData = data
    var arr = []
    for(var i=0;i<fansData.length;i++){
      //var id = followData[i].id
      var age = cage(fansData[i].birthday)
      arr.push(age)
      if(fansData[i].imgUrl == null||fansData[i].imgUrl==""){
        fansData[i].imgUrl = "./img/signin/steam.png"
      }
      
    }
    $scope.age = arr;
  })
 })