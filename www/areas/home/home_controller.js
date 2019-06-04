/**
 * 首页控制器模块
 */
angular.module('home.controller',[])

.controller('HomeController',function($scope,$window){

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