/* 
* 我的的服务器模块
*/

angular.module('account.service',[])

.factory('AccountService',function(){
  return{
    getData:function(){
      //定义访问后台的接口
      var url = configService.getHostUrl() + '/guidePage/get?callback=JSON_CALLBACK';
      $http.jsonp(url)
      .success(function(data){
        console.log(data);
        //将数据回调
        callback(data);
      }
    )}
  }
})