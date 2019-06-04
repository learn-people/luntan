/**
 * 信息页面的控制器模块
 */


angular.module('massage.controller',[])


.controller('MassageController',function($scope, $ionicPopup){
    $scope.data = {}
    $scope.showPopup = function () {
        var myPopup = $ionicPopup.show({
            titleText: '输入回复内容',
            subTitle: '回复',
            template: '<input type="password" ng-model="data.psw">',
            scope: $scope,          // 关联作用域对象
            buttons: [
                { text: '取消' },
                {
                    text: '发送',
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

