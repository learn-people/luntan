/* 
*导航标签页的控制器模块
*/

angular.module('tab.controller',[])

.controller('TabController',function($scope){
  //初始化购物车的商品数量
  $scope.cartCount = {
    count:'0'             //使用徽章显示购物车的商品数量，必须设置为字符串类型。
  }
})