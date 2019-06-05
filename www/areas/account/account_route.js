/* 
 * 我的的子路由模块
*/

angular.module('account.route',['account.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('tab.account',{
      url:'/account',
        views:{           //配置导航标签页tab中的容器中的name属性
            'tab-account':{
              templateUrl:'areas/account/account.html',
              controller:'AccountController'
            }
          }
      })
      //登录路由
    .state('signin',{
      url:'/signin',
      templateUrl:'areas/account/signin/signin.html',
      controller:'AccountController'
    })
    //设置的路由
    .state('option',{
      url:'/option',
      templateUrl:'areas/account/option/option.html',
      controller:'AccountController'
    })
    //修改密码界面路由
    .state('changePw',{
      url:'/changePw',
      templateUrl:'areas/account/option/changePw/changePw.html',
      controller:'AccountController'
    })
    //注册界面路由
    .state('register',{
      url:'/register',
      templateUrl:'areas/account/register/register.html',
      controller:'AccountController'
    })
    //注册详情界面路由
    .state('registerDetail',{
      url:'/registerDetail',
      templateUrl:'areas/account/register/registerDetail.html',
      controller:'AccountController'
    })
})
