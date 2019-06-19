/**
 * 首页控制器模块
 */
var app = angular.module('home.controller',['ionic','home.service']);

app.controller('HomeController',function($scope,$window, $location, $anchorScroll,homeService){

    $scope.jumpToDetail = function(id){
        console.log(id);
        $location.path("/detail");
        
    }
    //获取后台传回的数据
    homeService.getData(function(data){
        console.log(data);
        $scope.data = data
    })


    /* 点赞设置 */
    $scope.clickIcon = function($event,iconName){
        var buttonClasses = $event.currentTarget.className;
        var colorStyle = document.getElementById('like');

        if(buttonClasses.indexOf(iconName + '-outline') > 0){
            buttonClasses = buttonClasses.replace('-outline','');
            colorStyle = colorStyle.style.color = 'red';   
        }else{
            buttonClasses = buttonClasses.replace(iconName,iconName + '-outline');
        }
        $event.currentTarget.className = buttonClasses;
    }

    /* 导航设置 */ 
    $(".navigation-nav-1-img").click(function () { 
        $('.navigation-xian').animate({left:'2%'},200);
        $('.navigation-xian').css('background-color', 'rgb(226, 116, 43)');
        
        $("#function-content2").css("display","block");
        $("#function-content3").css("display","none");
        $("#function-content4").css("display","none");
        $("#function-content5").css("display","none");

    });
    $(".navigation-nav-2-img").click(function () { 
        $('.navigation-xian').animate({left:'27%'},200);
        $('.navigation-xian').css('background-color', 'blueviolet');
        
        $("#function-content3").css("display","block");
        $("#function-content2").css("display","none");
        $("#function-content4").css("display","none");
        $("#function-content5").css("display","none");
    });
    $(".navigation-nav-3-img").click(function () { 
        $('.navigation-xian').animate({left:'52%'},200);
        $('.navigation-xian').css('background-color','rgb(226, 43, 43)');
        
        $("#function-content4").css("display","block");
        $("#function-content3").css("display","none");
        $("#function-content2").css("display","none");
        $("#function-content5").css("display","none");
    });
    $(".navigation-nav-4-img").click(function () { 
        $('.navigation-xian').animate({left:'77%'},200);
        $('.navigation-xian').css('background-color','blueviolet');
        
        $("#function-content5").css("display","block");
        $("#function-content4").css("display","none");
        $("#function-content3").css("display","none");
        $("#function-content2").css("display","none");
    });

})
