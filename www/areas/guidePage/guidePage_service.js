/* 
*引导页的数据服务模块
*/
angular.module('guidePage.service',[])

.factory('guidePageService',function($http,configService){
  return{
    //获取引导页数据
    getData:function(callback){
      //定义访问后台的接口
      var url = configService.getHostUrl() + '/guidePage/get?callback=JSON_CALLBACK';
      $http.jsonp(url,{
        
      })
      .success(function(data){
        console.log(data);
        //将数据回调
        callback(data);
      })
    }
  }
})