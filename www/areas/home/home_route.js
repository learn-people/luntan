/* 
*首页的子路由模块
*/

angular.module('home.route',['home.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('tab.home',{
      url:'/home',
      views:{           //配置导航标签页tab中的容器中的name属性
        'tab-home':{
          templateUrl:'areas/home/home.html',
          controller:'HomeController'
        }
      }
    })
})