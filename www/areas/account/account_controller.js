/* 
*我的标签页的控制器模块
*/

angular.module('account.controller',[])

.controller('AccountController',function($scope){
  $scope.test = 0
  $scope.test1 = 1
  $scope.uploads = function(id){
    $("#"+id).trigger("click");
        openuploads(id);
  }
  
})

function openuploads(id){
    
}