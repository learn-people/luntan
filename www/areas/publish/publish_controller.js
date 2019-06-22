/**
 * 发布页面的控制器模块
 */


angular.module('publish.controller',[])


.controller('PublishController',function($scope,$ionicHistory){
    //返回上一页
    $scope.goBack = function(){
        $ionicHistory.goBack();
    }

    //mydate中设置图像宽度与高度一致
    $(function (){
        var imgWidth = $("#imgWidth").innerHeight();
        $("#imgWidth").css('width',imgWidth);
    })

    



})