/* 
* 首页的服务器模块
*/

angular.module('home.service',[])

.factory('homeService',function($http,configService){
  function getData(section,callback){
    //访问贴子信息数据的接口
    var url = configService.getHostUrl() + '/post/select.json?callback=JSON_CALLBACK'
    $http.jsonp(url,{
      params:section
    })
      .success(function(data){
        callback(data)
      })
  }
  //更新观看信息
  function updateLook(id){
    var url = configService.getHostUrl() + '/post/updateLook.json?callback=JSON_CALLBACK'
    $http.jsonp(url,{
      params:id
    })
  }

  return{
    "getData":getData,
    "updateLook":updateLook
  }
})

/**
 * 定义一个记录历史地址的service
 * 
 */
.factory('historyUrlService',["$state",function($state){
  //用于记录上一个页面的历史地址
  var backUrl = "";
  function setBackUrl(url){
    backUrl = url;
  }

  function getBackUrl(){
    return backUrl;
  }

  /** 
   * 根据statement
  */
 function goUrlByState(state){
   $state.go(state);
 }

 /** 
  * 根据url跳转
 */
 function goUrlBuyUrl(url){
   window.location.href = url;
 }

 return {
   "goUrlBuyUrl":goUrlBuyUrl,
   "goUrlByState":goUrlByState,
   "setBackUrl":setBackUrl,
   "getBackUrl":getBackUrl
 }

}])

