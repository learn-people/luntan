/* 
 *项目的启动模块，实现依赖其他各主要模块，保留官方模板的run函数
*/
angular.module('starter', ['ionic','route','config'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //在表单输入时隐藏键盘
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    //设置状态栏的默认效果
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

