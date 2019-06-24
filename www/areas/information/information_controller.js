/* 
*信息详情页面的控制器模块
*/

angular.module('information.controller', ['information.service','massage.service'])

    .controller('InformationController', function ($scope, $location, $anchorScroll,massageService,informationService) {
        /*获取home页面中利用homeService挂载的数据 */
        var postId = massageService.postId;
        console.log(postId);
        console.log(typeof(postId));
        var temp = {"postId":postId}
        //查询评论后台传回的数据
        informationService.getData(temp,function(data){
            //console.log(temp);
            //挂载数据，进行渲染
            $scope.data = data;
            console.log(data);
        })
        //查询贴子的信息
        var postId = {"id":postId}
        informationService.getPostData(postId,function(postData){
            $scope.postData = postData;
            var data = $scope.postData;

            console.log(data);
        })
    })