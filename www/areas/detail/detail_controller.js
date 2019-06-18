/* 
*贴子详情页面的控制器模块
*/

angular.module('detail.controller', [])

    .controller('DetailController', function ($scope, $location, $anchorScroll) {
        /* 设置a标签的锚点跳转 */
        $scope.toComment = function (location) {
            var location = $location.hash(location);
            $anchorScroll();
        };

        /* 内容区点赞设置 */
        $scope.clickIcon = function ($event, iconName) {
            var buttonClasses = $event.currentTarget.className;

            if (buttonClasses.indexOf(iconName + '-outline') > 0) {
                buttonClasses = buttonClasses.replace('-outline', '');
            } else {
                buttonClasses = buttonClasses.replace(iconName, iconName + '-outline');
            }
            $event.currentTarget.className = buttonClasses;
        }

        /* 底部点赞设置 */
        var flag = 1;
        var praise = sessionStorage.getItem("praise");
        if (praise == 1) {
                $("#comment-like").removeClass("icon-like-outline");
                $("#comment-like").addClass("icon-like");
                praise = 0; 
            }else{
                $("#comment-like").removeClass("icon-like");
                $("#comment-like").addClass("icon-like-outline");
            }
        $("#comment-like").click(function () {
            if (flag == 1) {
                $("#comment-like").removeClass("icon-like-outline");
                $("#comment-like").addClass("icon-like");
                flag = 0;
                sessionStorage.setItem("hom","1");
            }else{
                $("#comment-like").removeClass("icon-like");
                $("#comment-like").addClass("icon-like-outline")
                flag = 1;
            }
        })
    })