/* 
*贴子详情页面的控制器模块
*/

angular.module('detail.controller',[])

.controller('DetailController',function($scope,$location,$anchorScroll){
  /* 设置a标签的锚点跳转 */
  $scope.toComment = function(location) {
    var location = $location.hash(location);
    $anchorScroll();
   };
})