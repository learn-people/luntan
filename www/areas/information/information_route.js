/* 
*信息详情页面的子路由模块
*/

angular.module('information.route',['information.controller'])

.config(function($stateProvider){
  $stateProvider
   .state('information',{
     url:'/information',
     templateUrl:'areas/information/information.html',
     controller:'InformationController'
   })
})