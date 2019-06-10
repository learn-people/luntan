/* 
  导航页的子路由模块
*/

angular.module('plate.route',['plate.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('plate',{
      url:'/plate',
      templateUrl:'areas/plate/plate.html',
      controller:'PlateController'
    })
})