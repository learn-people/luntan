/* 
*项目的全局路由模块，实现启动默认页面的跳转，以及依赖子模块的路由。
*/

<<<<<<< HEAD
angular.module('route',['guidePage.route','tab.route','home.route','massage.route','publish.route'])
=======
angular.module('route',['guidePage.route','tab.route','home.route','publish.route','detail.route'])
>>>>>>> 79a26b353beb817aa4c855569fa3167c396e628b

.config(function($urlRouterProvider){
  //使用H5提供的LocalStorage来存储一个布尔变量，判断是否第一次打开APP，默认值是false
  if(localStorage["isFirst"]){
    //跳转到首页
    $urlRouterProvider.otherwise('/tab/home');
  }else{
    //设置项目的启动页面url
    $urlRouterProvider.otherwise('/guidePage');
  }
})