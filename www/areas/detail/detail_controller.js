/* 
*贴子详情页面的控制器模块
*/

angular.module('detail.controller', ['home.service','detail.service'])

    .controller('DetailController', function ($scope,$filter,$location,$ionicPopup,$timeout,$anchorScroll,detailService,homeService,historyUrlService) {
        /** 
         * 回退到上一个页面
        */
       $scope.goBack = function(){
           var url = historyUrlService.getBackUrl();
           //console.log(url);
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
            //console.log(temp);
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
            console.log(commentData);
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
/****************************评论设置**************************************************************** */
        $scope.send = function(){
            //添加评论
            //获取时间
            $scope.dt = new Date();
            var commentTime = $filter("date")($scope.dt, "yyyy-MM-dd HH:mm:ss");
            //获取内容
            var commentContent = "";
            commentContent = $(".in-text").val();
            console.log(commentContent);
            //获取账号
            var userNum = localStorage.getItem('userNumber')+""; 
            //console.log(userNum);
            //获取贴子id
            var postId = id;
            //console.log(typeof(id));
            if(commentContent == ""){
                //失败时的提示
                var failtext = '<div class="addSuccessBodyU">'
                +'<i class="icon  ion-ios-close-empty addSuccessI"></i>'
                +'</div>'
                +'<div class="addSuccessBodyD">'
                +'<p>请输入内容</p>'
                +'</div>'
                var myPopup = $ionicPopup.show({
                    cssClass:'mydate-popup',
                    template: failtext
                });
                myPopup.then(function(res) {
                    //console.log('Tapped!', res);
                });
                $timeout(function() {
                    myPopup.close(); // 1秒后关闭弹窗
                }, 1000);
            }else{
                var param = {"postId":postId,"userNum":userNum,"commentContent":commentContent,"commentTime":commentTime};
                detailService.insertData(param,function(data){
                    //评论添加成功或，从新获取数据
                    if(data == 1){
                        //评论成功时弹出提示
                        var failtext = '<div class="addSuccessBodyU">'
                        +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
                        +'</div>'
                        +'<div class="addSuccessBodyD">'
                        +'<p>评论成功</p>'
                        +'</div>'
                        var myPopup = $ionicPopup.show({
                            cssClass:'mydate-popup',
                            template: failtext
                        });
                        myPopup.then(function(res) {
                            //console.log('Tapped!', res);
                        });
                        $timeout(function() {
                            myPopup.close(); // 1秒后关闭弹窗
                            $('#comment-bar').css('display','block');
                            $('#comment-send').css('display','none');
                        }, 1000);

                        //console.log($scope.input);
                        $scope.in1 = "";
                        
                        //评论成功后从新获取数据
                        var postId = {"id":id}
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

        /* 删除评论 */
        $scope.deleteComment = function(commentId){
            var del = {"userNum":userNum,"id":commentId};
            detailService.deleteData(del,function(data){
                if(data == 1){
                    //评论成功时弹出提示
                    var failtext = '<div class="addSuccessBodyU">'
                    +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
                    +'</div>'
                    +'<div class="addSuccessBodyD">'
                    +'<p>删除成功</p>'
                    +'</div>'
                    var myPopup = $ionicPopup.show({
                        cssClass:'mydate-popup',
                        template: failtext
                    });
                    myPopup.then(function(res) {
                        //console.log('Tapped!', res);
                    });
                    $timeout(function() {
                        myPopup.close(); // 1秒后关闭弹窗
                    }, 1000);

                    //console.log($scope.input);
                    $scope.in1 = "";
                    
                    //评论成功后从新获取数据
                    var postId = {"id":id}
                    detailService.getCommentData(postId,function(commentData){
                        $scope.commentData = commentData;
                        /* var i = 0;
                        angular.forEach($scope.commentData,function(look){
                            if(look.commentContent != ""){
                                i ++ ;
                            }
                            $scope.floors = i;
                        }) */
                    })
                }else{
                    //失败时的提示
                var failtext = '<div class="addSuccessBodyU">'
                +'<i class="icon  ion-ios-close-empty addSuccessI"></i>'
                +'</div>'
                +'<div class="addSuccessBodyD">'
                +'<p>抱歉,你无权删除</p>'
                +'</div>'
                var myPopup = $ionicPopup.show({
                    cssClass:'mydate-popup',
                    template: failtext
                });
                myPopup.then(function(res) {
                    //console.log('Tapped!', res);
                });
                $timeout(function() {
                    myPopup.close(); // 1秒后关闭弹窗
                }, 1000);
                }
            })
        }

        /* 设置a标签的锚点跳转 */
        $scope.toComment = function (location) {
            var location = $location.hash(location);
            $anchorScroll();
        };
        
/*******点赞设置******************************************************************************** */
        /* 查询是否已点赞 */
        //获取用户账号以及当前贴子id
        var postId = homeService.id;
        var userNum = localStorage.getItem('userNumber')+"";
        var like = {"postId":postId,"userNum":userNum};
        var collection = {"postId":postId,"userNum":userNum};
        detailService.selectPraise(like,function(praiseData){
            console.log(praiseData);
            if(praiseData == 1){
                $("#like").removeClass("icon-like-outline").addClass("icon-like")
            }
        })
        /* 点赞设置 */
        $scope.clickIcon = function($event,iconName){
            
            //点赞的设置
            var buttonClasses = $event.currentTarget.className;
            var colorStyle = document.getElementById('like');

            if(buttonClasses.indexOf(iconName + '-outline') > 0){
                buttonClasses = buttonClasses.replace('-outline','');
                colorStyle = colorStyle.style.color = '#387ef5';
                //调用后台添加点赞记录
                detailService.insertPraise(like,function(praiseData){
                    if(praiseData == 1){
                        //评论成功时弹出提示
                        var failtext = '<div class="addSuccessBodyU">'
                        +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
                        +'</div>'
                        +'<div class="addSuccessBodyD">'
                        +'<p>点赞成功</p>'
                        +'</div>'
                        var myPopup = $ionicPopup.show({
                            cssClass:'mydate-popup',
                            template: failtext
                        });
                        myPopup.then(function(res) {
                            //console.log('Tapped!', res);
                        });
                        $timeout(function() {
                            myPopup.close(); // 1秒后关闭弹窗
                        }, 1000);
                    }
                })

            }else{
                buttonClasses = buttonClasses.replace(iconName,iconName + '-outline');
                detailService.deletePraise(like,function(praiseData){
                    if(praiseData == 1){
                        var failtext = '<div class="addSuccessBodyU">'
                        +'<i class="icon  ion-ios-close-empty addSuccessI"></i>'
                        +'</div>'
                        +'<div class="addSuccessBodyD">'
                        +'<p>已取消点赞</p>'
                        +'</div>'
                        var myPopup = $ionicPopup.show({
                            cssClass:'mydate-popup',
                            template: failtext
                        });
                        myPopup.then(function(res) {
                            //console.log('Tapped!', res);
                        });
                        $timeout(function() {
                            myPopup.close(); // 1秒后关闭弹窗
                        }, 1000);
                    };
                })
            }
            $event.currentTarget.className = buttonClasses;
        }
/*******************收藏设置****************************************************************** */
        /* 查询是否已收藏 */
        detailService.selectCollection(collection,function(collectionData){
            console.log(collectionData);
            if(collectionData == 1){
                $("#comment-collection").removeClass("icon-shoucang-outline").addClass("icon-shoucang")
            }
        })
        /* 收藏设置 */
        $scope.clickCol = function($event,iconName){
            
            //收藏的设置
            var buttonClasses = $event.currentTarget.className;
            var colorStyle = document.getElementById('comment-collection');

            if(buttonClasses.indexOf(iconName + '-outline') > 0){
                buttonClasses = buttonClasses.replace('-outline','');
                //colorStyle = colorStyle.style.color = '#387ef5';
                //调用后台添加收藏记录
                detailService.insertCollection(collection,function(collectionData){
                    if(collectionData == 1){
                        //收藏成功时弹出提示
                        var failtext = '<div class="addSuccessBodyU">'
                        +'<i class="icon ion-ios-checkmark-empty addSuccessI"></i>'
                        +'</div>'
                        +'<div class="addSuccessBodyD">'
                        +'<p>收藏成功</p>'
                        +'</div>'
                        var myPopup = $ionicPopup.show({
                            cssClass:'mydate-popup',
                            template: failtext
                        });
                        myPopup.then(function(res) {
                            //console.log('Tapped!', res);
                        });
                        $timeout(function() {
                            myPopup.close(); // 1秒后关闭弹窗
                        }, 1000);
                    }
                })

            }else{
                buttonClasses = buttonClasses.replace(iconName,iconName + '-outline');
                detailService.deleteCollection(collection,function(collectionData){
                    if(collectionData == 1){
                        var failtext = '<div class="addSuccessBodyU">'
                        +'<i class="icon  ion-ios-close-empty addSuccessI"></i>'
                        +'</div>'
                        +'<div class="addSuccessBodyD">'
                        +'<p>已取消收藏</p>'
                        +'</div>'
                        var myPopup = $ionicPopup.show({
                            cssClass:'mydate-popup',
                            template: failtext
                        });
                        myPopup.then(function(res) {
                            //console.log('Tapped!', res);
                        });
                        $timeout(function() {
                            myPopup.close(); // 1秒后关闭弹窗
                        }, 1000);
                    };
                })
            }
            $event.currentTarget.className = buttonClasses;
        }
    
    /*******************我的贴子****************************************************************** */
    
    })