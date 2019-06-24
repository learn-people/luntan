/* 
 * 我的的子路由模块
*/

angular.module('account.route',['account.controller','follow.controller','fans.controller',
  'mydate.controller','register.controller','signin.controller','mydateEdit.controller',
  'myCollection.controller','otherdate.controller'])

.config(function($stateProvider){
  $stateProvider
    .state('tab.account',{
      url:'/account',
      //cache:false,
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
      //cache:false,
      templateUrl:'areas/account/signin/signin.html',
      controller:'SigninController'
    })
    //设置的路由
    .state('option',{
      url:'/option',
      //cache:false,
      templateUrl:'areas/account/option/option.html',
      controller:'AccountController'
    })
    //修改密码界面路由
    .state('changePw',{
      url:'/changePw',
      //cache:false,
      templateUrl:'areas/account/option/changePw/changePw.html',
      controller:'AccountController'
    })
    //注册界面路由
    .state('register',{
      url:'/register',
      //cache:false,
      templateUrl:'areas/account/register/register.html',
      controller:'RegisterController'
    })
    //注册详情界面路由
    .state('registerDetail',{
      url:'/registerDetail',
      //cache:false,
      templateUrl:'areas/account/register/registerDetail.html',
      controller:'RegisterController'
    })
    //我的关注界面路由
    .state('follow',{
      url:'/follow',
      //cache:false,
      templateUrl:'areas/account/follow/follow.html',
      controller:'FollowController'
    })
    //我的粉丝界面路由
    .state('fans',{
      url:'/fans',
      //cache:false,
      templateUrl:'areas/account/fans/fans.html',
      controller:'FansController'
    })
    //资料详情界面路由
    .state('mydate',{
      url:'/mydate',
      //cache:false,
      templateUrl:'areas/account/mydate/mydate.html',
      controller:'MydateController'
    })
    //资料详情界面路由
    .state('otherdate',{
      url:'/otherdate',
      //cache:false,
      templateUrl:'areas/account/otherdate/otherdate.html',
      controller:'OtherdateController'
    })
    //编辑资料界面路由
    .state('mydateEdit',{
      url:'/mydateEdit',
      //cache:false,
      templateUrl:'areas/account/mydateEdit/mydateEdit.html',
      controller:'MydateEditController'
    })
    //编辑签名界面路由
    .state('autography',{
      url:'/autography',
      //cache:false,
      templateUrl:'areas/account/mydate/autography.html',
      controller:'AccountController'
    })
    //我的帖子界面路由
    .state('myPost',{
      url:'/myPost',
     // cache:false,
      templateUrl:'areas/account/myPost/myPost.html',
      controller:'AccountController'
    })
    //我的回复界面路由
    .state('myReply',{
      url:'/myReply',
      //cache:false,
      templateUrl:'areas/account/myReply/myReply.html',
      controller:'AccountController'
    })
    //我的收藏界面路由
    .state('myCollection',{
      url:'/myCollection',
      //cache:false,
      templateUrl:'areas/account/myCollection/myCollection.html',
      controller:'MyCollectionController'
    })
    //我的愿望单界面路由
    .state('myHope',{
      url:'/myHope',
      //cache:false,
      templateUrl:'areas/account/myHope/myHope.html',
      controller:'AccountController'
    })
    
})
