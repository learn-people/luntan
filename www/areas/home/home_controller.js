/**
 * 首页控制器模块
 */
var app = angular.module('home.controller',['ionic']);

app.controller('HomeController',function($scope,$window){

    /* 点赞设置 */
    $scope.clickIcon = function($event,iconName){   
        var buttonClasses = $event.currentTarget.className;
        var colorStyle = document.getElementById('like');

        if(buttonClasses.indexOf(iconName + '-outline') > 0){
            buttonClasses = buttonClasses.replace('-outline','');
            colorStyle = colorStyle.style.color = 'red';   
            sessionStorage.setItem("praise","1"); 
        }else{
            buttonClasses = buttonClasses.replace(iconName,iconName + '-outline');
            sessionStorage.setItem("praise","0");
        }
        $event.currentTarget.className = buttonClasses;
    }
    

    /* 导航设置 */ 
    $("#navigation-nav-1-img").click(function () { 
        $('.navigation-xian').animate({left:'2%'},600);
        $('.navigation-xian').css('background-color', 'rgb(226, 116, 43)');
        
        $("#function-content2").css("display","block");
        $("#function-content3").css("display","none");
        $("#function-content4").css("display","none");
        $("#function-content5").css("display","none");

    });
    $("#navigation-nav-2-img").click(function () { 
        $('.navigation-xian').animate({left:'27%'},600);
        $('.navigation-xian').css('background-color', 'blueviolet');
        
        $("#function-content3").css("display","block");
        $("#function-content2").css("display","none");
        $("#function-content4").css("display","none");
        $("#function-content5").css("display","none");
    });
    $("#navigation-nav-3-img").click(function () { 
        $('.navigation-xian').animate({left:'52%'},600);
        $('.navigation-xian').css('background-color','rgb(226, 43, 43)');
        
        $("#function-content4").css("display","block");
        $("#function-content3").css("display","none");
        $("#function-content2").css("display","none");
        $("#function-content5").css("display","none");
    });
    $("#navigation-nav-4-img").click(function () { 
        $('.navigation-xian').animate({left:'77%'},600);
        $('.navigation-xian').css('background-color','blueviolet');
        
        $("#function-content5").css("display","block");
        $("#function-content4").css("display","none");
        $("#function-content3").css("display","none");
        $("#function-content2").css("display","none");
    });

})

app.directive('focusInput', ['$ionicScrollDelegate', '$window', '$timeout', '$ionicPosition', function ($ionicScrollDelegate, $window, $timeout, $ionicPosition) {
    return {
      template: '<input type="tel" maxlength="20" autocomplete="true" />',
      restrict: 'A',
      scope: false,
      link: function ($scope, iElm, iAttrs, controller) {
        if (ionic.Platform.isANDROID()) {
            iElm.on('focus', function () {
                var top = $ionicScrollDelegate.getScrollPosition().top;
                var eleTop = ($ionicPosition.offset(iElm).top) / 2
                var realTop = eleTop + top;
                $timeout(function () {
                    if (!$scope.$last) {
                        $ionicScrollDelegate.scrollTo(0,realTop);
                    } else {
                      try {
                          var aim = angular.element(document).find('.scroll')
                          aim.css('transform', 'translate3d(0px,' + '-' + realTop + 'px, 0px) scale(1)');
                          $timeout(function () {
                              iElm[0].focus();
                              console.log(2);
                          }, 100)
                      } catch (e) {
                      }
                    }
                }, 500)
            })
        }
      }
    }
}])