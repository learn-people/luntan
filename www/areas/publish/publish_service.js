/**
 * 发布页面的服务模块
 */


angular.module('publish.service',['config'])



.factory('publishService',function(configService,$http){
    return{
      //发布界面
        publish:function(data,callback){
            var url = configService.getHostUrl() + '/post/publish.json?callback=JSON_CALLBACK';
            $http.jsonp(url,{
                params:{"data":data},
                cache:false,
                contentType:"application/json"
            })
            .success(function(data){
              //将数据回调
              callback(data);
            })
        },
        get: function (userInfo, callback) {
            //  向后台发起请求，获取个人信息
            //  注意：使用手机调试时，host需要设置为电脑的ip值
            var url = "http://169.254.220.1:8080/MallWeb/user/get?callback=JSON_CALLBACK"
            $http.jsonp(url,
              {
                params: userInfo
              })
              .success(function (data) {
                callback(data)
              })
          },
          update: function (userInfo, callback) {
            //  向后台发起请求，更新个人信息
            var url = "http://169.254.220.1:8080/MallWeb/user/update?callback=JSON_CALLBACK"
            $http.jsonp(url,
              {
                params: userInfo
              }).success(function (data) {
                callback(data)
              })
          },
          getToken: function (key, callback) {
            //  请求后台获取七牛上传凭证token
            var url = 'http://169.254.220.1:8080/MallWeb/token/get?callback=JSON_CALLBACK'
            console.log('getToken：' + key)
            $http.jsonp(url,
              {
                params: { key: key }
              }).success(function (data) {
                var resultData = JSON.stringify(data)
                callback(data)
              })
          }
    }
})