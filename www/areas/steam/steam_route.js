/* 
 * 我的的子路由模块
*/

angular.module('steam.route',['steam.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('tab.steam',{
      url:'/steam',
        views:{           //配置导航标签页tab中的容器中的name属性
            'tab-steam':{
              templateUrl:'areas/steam/steam.html',
              controller:'SteamController'
            }
          }
      })
})
