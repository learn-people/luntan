/**
 * 首页控制器模块
 */
angular.module('home.controller',[])

.controller('HomeController',function($scope,$window){
    
    goTop();

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
    //回到顶部
    function goTop(){
        var bg = window.document.getElementById('home-content');
        var goTop = document.querySelector(".back_top");
        bg.addEventListener('scroll',function(){
            var top = bg.scrollTop;
            if(top>200){
                goTop.style.opacity = 1;
            }else{
                goTop.style.opacity = 0;
            }

        },false);
        goTop.onclick = function(){
            bg.scrollTop = 0;
        }
    };
})