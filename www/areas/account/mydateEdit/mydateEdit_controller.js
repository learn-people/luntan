// 资料编辑界面

angular.module('mydateEdit.controller',['mydateEdit.service'])

.controller('MydateEditController',function($scope,$ionicPopup){
  //编辑昵称
  
    $scope.editName = function() {
        var confirmPopup = $ionicPopup.confirm({
        cssClass:'myEdit-popup',
        title:"提示",
        template: "<input type='text' id='userName' placeholder='请输入昵称'>",
        cancelText:"取消",
        okText:"确认",
        scope:$scope
    });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
          
      } else {
        console.log('You are not sure');
      }
      });
    }
})