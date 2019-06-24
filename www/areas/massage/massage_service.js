/**
 * 信息页面的服务模块
 */


angular.module('massage.service',[])

.factory('massageService',function($http,configService){
    function getUserPost(select,callback){
        var url = configService.getHostUrl() + '/post/selectUser.json?callback=JSON_CALLBACK'
        $http.jsonp(url,{
            params:select
        })
        .success(function(data){
            callback(data)
          })   
    }

    return{
        "getUserPost":getUserPost
    }
})