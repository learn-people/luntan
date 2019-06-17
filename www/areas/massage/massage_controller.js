/**
 * 信息页面的控制器模块
 */


angular.module('massage.controller',[])


.controller('MassageController',function($scope, $ionicPopup){
    $scope.data = {}
    $scope.showPopup = function () {
        var myPopup = $ionicPopup.show({
            titleText: '输入回复内容',
            subTitle: '信息',
            template: '<div><i style="width:80%,height:150px,background-color:yellow,font-size:30px">123</i><input type="password" ng-model="data.psw"></div>',
            scope: $scope,          // 关联作用域对象
            buttons: [
                { text: '取消' },
                {
                    text: '回复',
                    type: 'button-positive',
                    onTap: function (e) {
                        console.log($scope.data.psw)
                        if (!$scope.data.psw) {     // 当输入回复为空时，保持弹出框不关闭
                            e.preventDefault()
                        } else {
                            myPopup.close()
                        }
                    }
                }
            ]
        })
    }
})

