/* 
*贴子详情页面的控制器模块
*/

angular.module('detail.controller', ['home.service','detail.service'])

    .controller('DetailController', function ($scope,$filter,$location, $anchorScroll,detailService,homeService,historyUrlService) {
        //获取当前时间
        $scope.today = new Date();
        var nowTime = $filter('date')($scope.today, 'yyyyMMddHHmmss');
        console.log(nowTime);
        /** 
         * 回退到上一个页面
        */
       $scope.goBack = function(){
           var url = historyUrlService.getBackUrl();
           console.log(url);
           if(url == ""){
               historyUrlService.goUrlByState("home");
           }else{
               historyUrlService.goUrlBuyUrl(url);
           }
        }

        /*获取home页面中利用homeService挂载的数据 */
        var id = homeService.id;
        var temp = {"id":id}
        //查询贴子信息获取后台传回的数据
        detailService.getData(temp,function(data){
            console.log(temp);
            //挂载数据，进行渲染
            console.log(data);
            $scope.data = data;
        })

        /**
         * 获取后台的评论信息
         * 
         */
        var postId = {"id":id}
        //获取数据
        detailService.getCommentData(postId,function(commentData){
            $scope.commentData = commentData;
            var i = 0;
            angular.forEach($scope.commentData,function(look){
                if(look.commentContent != ""){
                    i ++ ;
                }
                $scope.floors = i;
            })
        })

        /* 点击输入框时发生转换 */
        $scope.switch = function(){
            $('#comment-bar').css('display','none');
            $('#comment-send').css('display','block');
        }
        //添加评论
        $scope.send = function(){
            //获取时间
            $scope.dt = new Date();
            var commentTime = $filter("date")($scope.dt, "yyyy-MM-dd HH:mm:ss");
            console.log(typeof(commentTime));
            //获取内容
            var commentContent = "";
            commentContent = $(".in-text").val();
            console.log(typeof(commentContent));
            //获取账号
            var userNum = localStorage.getItem('userNumber')+""; 
            console.log(userNum);
            //获取贴子id
            var postId = id;
            console.log(typeof(id));
            if(commentContent == ""){
                console.log("输入评论内容");
            }else{
                var param = {"postId":postId,"userNum":userNum,"commentContent":commentContent,"commentTime":commentTime};
                detailService.insertData(param,function(data){
                    //评论添加成功或，从新获取数据
                    if(data == 1){
                        
                        var postId = {"id":id}
                        //获取数据
                        detailService.getCommentData(postId,function(commentData){
                            $scope.commentData = commentData;
                            var i = 0;
                            angular.forEach($scope.commentData,function(look){
                                if(look.commentContent != ""){
                                    i ++ ;
                                }
                                $scope.floors = i;
                            })
                        })
                    }
                })
            }
        }

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

    })