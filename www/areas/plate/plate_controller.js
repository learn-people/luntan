/* 
*导航标签页的控制器模块
*/

angular.module('plate.controller',[])

.controller('PlateController',function($scope){

  //选择版块时的样式变化
  $scope.change = function(temp){
    if(temp == 1){
        $("#part1").css("background-color","#d0d0d0")
        $("#part2").css("background-color","#fff")
        $("#part3").css("background-color","#fff")
        $("#part4").css("background-color","#fff")
        sessionStorage.setItem("part",1)
    }else if(temp == 2){
        $("#part1").css("background-color","#fff")
        $("#part2").css("background-color","#d0d0d0")
        $("#part3").css("background-color","#fff")
        $("#part4").css("background-color","#fff")
        sessionStorage.setItem("part",2)
    }else if(temp == 3){
        $("#part1").css("background-color","#fff")
        $("#part2").css("background-color","#fff")
        $("#part3").css("background-color","#d0d0d0")
        $("#part4").css("background-color","#fff")
        sessionStorage.setItem("part",3)
    }else if(temp == 4){
        $("#part1").css("background-color","#fff")
        $("#part2").css("background-color","#fff")
        $("#part3").css("background-color","#fff")
        $("#part4").css("background-color","#d0d0d0")
        sessionStorage.setItem("part",4)
    }
}

  //保存选择版块时的样式
  if(sessionStorage.getItem("part")==1){
    $("#part1").css("background-color","#d0d0d0")
  }else if(sessionStorage.getItem("part")==2){
    $("#part2").css("background-color","#d0d0d0")
  }else if(sessionStorage.getItem("part")==3){
    $("#part3").css("background-color","#d0d0d0")
  }else if(sessionStorage.getItem("part")==4){
    $("#part4").css("background-color","#d0d0d0")
  }
  $scope.cartCount = {
    count:'0'             
  }


  $("#content-theme-con-1").click(function () {
    
  })


})