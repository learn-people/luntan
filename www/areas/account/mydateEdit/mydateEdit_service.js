// 资料编辑界面service

angular.module('mydateEdit.service',['config'])

.factory('MydateEditService',function($http,configService){
    return{
        getData:function(temp,callback){
        //定义访问后台的接口
        //$scope.state = 0;
        var url = configService.getHostUrl() + '/userdetail/update.json?callback=JSON_CALLBACK';
        $http.jsonp(url,{
            //method:get,
            params:{"data":temp},
            //data:temp,
            cache:false,
            contentType:"application/json"
        })
        .success(function(data){
          //将数据回调
          callback(data);
        })
   }
}
})