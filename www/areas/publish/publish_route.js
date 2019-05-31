/**
 * 发布页面的子路由模块
 */

 angular.module('publish.route',['publish.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('tab.publish',{
      url:'/publish',
      views:{           //配置导航标签页tab中的容器中的name属性
        'tab-publish':{
          templateUrl:'areas/publish/publish.html',
          controller:'PublishController'
        }
      }
    })
})