/* 
  导航页的子路由模块
*/

angular.module('tab.route',['tab.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('tab',{
      url:'/tab',
      abstract:true,
      cache:false,
      templateUrl:'areas/tab/tab.html',
      controller:'TabController'
    })
})