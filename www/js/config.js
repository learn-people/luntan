/* 
*项目的全局配置文件，解决一些兼容性问题。
*/

angular.module('config',[])

.factory('configService',function(){
  var hostUrl = 'http://192.168.43.48:8080/luntanSSM';
  return {
    getHostUrl:function () { 
      return hostUrl;
    }
  }
})

.config(function($ionicConfigProvider){
  //在android设备中确保tabs标签栏在底部。
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
})