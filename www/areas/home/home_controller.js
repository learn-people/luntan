/**
 * 首页控制器模块
 */
var app = angular.module('home.controller',[]);

app.controller('HomeController',function($scope,$window){

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