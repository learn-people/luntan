/* 
*贴子详情页面的子路由模块
*/

angular.module('detail.route',['detail.controller'])

.config(function($stateProvider){
  $stateProvider
   .state('detail',{
     url:'/detail',
     cache:false,
     templateUrl:'areas/detail/detail.html',
     controller:'DetailController'
   })
})