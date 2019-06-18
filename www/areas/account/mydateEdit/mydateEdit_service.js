// 资料编辑界面service

angular.module('mydateEdit.service',['config'])

.factory('MydateEditService',function($http,configService){
    return{
        getData:function(temp,callback){
        //定义访问后台的接口
        //$scope.state = 0;
        var url = configService.getHostUrl() + '/user/register.json?callback=JSON_CALLBACK';
        // $http({
        //     method:jsonp,//就是请求方式get、post等
        //     url:url ,//向服务器请求的地址
        //     params:date,//携带的参数
        //     data:temp,//发送的数据
        //     heaers:obj,//设置头部
        //     cache:false,//是否缓存
        //     timeout:1000,//设置超时时间，在这段时间内没有响应，自动响应错误error这个函数
        //     //还有其他参数，常用的就上面这些
        // }).success(
        //     function(data){
        //         console.log(data);
                //将数据回调
        //         callback(data);
        //     }
        // ).error()
        $http.jsonp(url,{
            //method:get,
            params:{"data":temp},
            //data:temp,
            cache:false,
            contentType:"application/json"
        })
        .success(function(data){
          //console.log(data);
          //$scope.state = data;
          //将数据回调
          callback(data);
        })
   }
}
})