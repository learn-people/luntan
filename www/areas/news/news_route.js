/* 
  导航页的子路由模块
*/

angular.module('news.route',['news.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('news',{
      url:'/news',
      abstract:true,
      templateUrl:'areas/news/news.html',
      controller:'NewsController'
    })
})