/**
 * 发布页面的子路由模块
 */

 angular.module('massage.route',['massage.controller'])


.config(function($stateProvider){
  $stateProvider
    .state('tab.massage',{
      url:'/massage',
      views:{           //配置导航标签页tab中的容器中的name属性
        'tab-massage':{
          templateUrl:'areas/massage/massage.html',
          controller:'MassageController'
        }
      }
    })
})