/* 
* otherdate的服务器模块
*/

angular.module('otherdate.service',['config'])

.factory('OtherdateService',function(configService,$http){
  return{
    getData:function(id,callback){
      //定义访问后台的接口
      var url = configService.getHostUrl() + '/user/get.json?callback=JSON_CALLBACK';
      $http.jsonp(url,{
        //method:get,
        params:{"id":id},
        //data:temp,
        cache:false,
        contentType:"application/json"
    })
    .success(function(data){
    var resultdata = JSON.stringify(data)
    var data = JSON.parse(resultdata)
      console.log(data);
      //$scope.state = data;
      //将数据回调
      callback(data);
    })
  },
    getDetailData:function(userNumber,callback){
      //定义访问后台的接口
      var url = configService.getHostUrl() + '/userdetail/getDetail.json?callback=JSON_CALLBACK';
      $http.jsonp(url,{
        //method:get,
        params:{"userNumber":userNumber},
        //data:temp,
        cache:false,
        contentType:"application/json"
    })
    .success(function(data){
    var resultdata = JSON.stringify(data)
    var data = JSON.parse(resultdata)
      callback(data);
    })
  },
    checkRelation:function(id,toid,callback){
      //定义访问后台的接口
      var url = configService.getHostUrl() + '/followed/check.json?callback=JSON_CALLBACK';
      $http.jsonp(url,{
        //method:get,
        params:{"id":id,"toid":toid},
        //data:temp,
        cache:false,
        contentType:"application/json"
    })
    .success(function(data){
    var resultdata = JSON.stringify(data)
    var data = JSON.parse(resultdata)
      callback(data);
    })
  },
    delete:function(id,toid,callback){
      //定义访问后台的接口
      var url = configService.getHostUrl() + '/followed/delete.json?callback=JSON_CALLBACK';
      $http.jsonp(url,{
        //method:get,
        params:{"id":id,"toid":toid},
        //data:temp,
        cache:false,
        contentType:"application/json"
    })
    .success(function(data){
    var resultdata = JSON.stringify(data)
    var data = JSON.parse(resultdata)
      callback(data);
    })
  },
    insert:function(id,toid,callback){
      //定义访问后台的接口
      var url = configService.getHostUrl() + '/followed/insert.json?callback=JSON_CALLBACK';
      $http.jsonp(url,{
        //method:get,
        params:{"id":id,"toid":toid},
        //data:temp,
        cache:false,
        contentType:"application/json"
    })
    .success(function(data){
    var resultdata = JSON.stringify(data)
    var data = JSON.parse(resultdata)
      callback(data);
    })
  }
}
})