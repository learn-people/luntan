/* 
 * 我的的子路由模块
*/

angular.module('account.route',['account.controller','follow.controller','mydate.controller'])

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
    //我的关注界面路由
    .state('follow',{
      url:'/follow',
      templateUrl:'areas/account/follow/follow.html',
      controller:'FollowController'
    })
    //我的粉丝界面路由
    .state('fans',{
      url:'/fans',
      templateUrl:'areas/account/fans/fans.html',
      controller:'AccountController'
    })
    //资料详情界面路由
    .state('mydate',{
      url:'/mydate',
      templateUrl:'areas/account/mydate/mydate.html',
      controller:'MydateController'
    })
    //编辑资料界面路由
    .state('mydateEdit',{
      url:'/mydateEdit',
      templateUrl:'areas/account/mydateEdit/mydateEdit.html',
      controller:'AccountController'
    })
    //编辑签名界面路由
    .state('autography',{
      url:'/autography',
      templateUrl:'areas/account/mydate/autography.html',
      controller:'AccountController'
    })
    //我的帖子界面路由
    .state('myPost',{
      url:'/myPost',
      templateUrl:'areas/account/myPost/myPost.html',
      controller:'AccountController'
    })
    //我的回复界面路由
    .state('myReply',{
      url:'/myReply',
      templateUrl:'areas/account/myReply/myReply.html',
      controller:'AccountController'
    })
    //我的收藏界面路由
    .state('myCollection',{
      url:'/myCollection',
      templateUrl:'areas/account/myCollection/myCollection.html',
      controller:'AccountController'
    })
    //我的愿望单界面路由
    .state('myHope',{
      url:'/myHope',
      templateUrl:'areas/account/myHope/myHope.html',
      controller:'AccountController'
    })
    
})
