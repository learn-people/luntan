/**
 * 信息页面的控制器模块
 */


angular.module('massage.controller',[])


.controller('MassageController',function($scope, $ionicPopup){

    $(".massage-navigation-1").click(function () { 
        $('.massage-navigation-xian').animate({left:'2%'},600);
        $('.massage-navigation-xian').css('background-color', 'rgb(226, 116, 43)');
        
        $("#massage-content2").css("display","block");
        $("#massage-content3").css("display","none");

    });
    $(".massage-navigation-2").click(function () { 
        $('.massage-navigation-xian').animate({left:'52%'},600);
        $('.massage-navigation-xian').css('background-color', 'blueviolet');
        
        $("#massage-content3").css("display","block");
        $("#massage-content2").css("display","none");
        
    });
    
})

    