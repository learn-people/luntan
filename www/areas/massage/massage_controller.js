/**
 * 信息页面的控制器模块
 */


angular.module('massage.controller',['massage.service','home.service'])


.controller('MassageController',function($scope, $state,$ionicPopup,massageService,homeService,historyUrlService){

    $(".notice-nav-1-img").click(function () { 
        $('.massage-navigation-xian').animate({left:'2%'},100);
        $('.massage-navigation-xian').css('background-color', 'rgb(226, 116, 43)');
        
        $("#massage-content2").css("display","block");
        $("#massage-content3").css("display","none");

    });
    $(".system-nav-2-img").click(function () { 
        $('.massage-navigation-xian').animate({left:'52%'},100);
        $('.massage-navigation-xian').css('background-color', 'blueviolet');
        
        $("#massage-content3").css("display","block");
        $("#massage-content2").css("display","none");
        
    });

    $scope.jumpInformation = function(postId){
        massageService.postId = postId;
        $state.go("information");
    }

    var userNum = localStorage.getItem("userNumber");
    var select = {'userNum':userNum}
    massageService.getUserPost(select,function(data){
        $scope.userPost = data;
        console.log(data);
    })

    //从收藏界面点击跳转到贴子详情页面
    $scope.massateToDetail = function(postId){
        //将数据挂载在hemeService服务器上
        homeService.id = postId;
        historyUrlService.setBackUrl(window.location.href);
        $state.go("detail");
        //更新后台信息
        var id = {"id":postId}
        homeService.updateLook(id);
      }
    
})

    