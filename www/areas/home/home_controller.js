/**
 * 首页控制器模块
 */
var app = angular.module('home.controller',['ionic','home.service']);

app.controller('HomeController',function($scope,$state,$window, $location, $anchorScroll,homeService,historyUrlService){
    /* 导航设置 */
    /* 谈天说地 */
    $scope.toOne = function (location) { 
        var sectionId = 1;
        var section = {"sectionId":sectionId}
        //获取后台传回的数据
        homeService.getData(section,function(data){
            $scope.data = data
            console.log(data);
            /* 使用forEach循环遍历对象数组，判断数据中是否含有图片并设置Boolean变量 */
            /* var i = 0;
            console.log(data);
            angular.forEach($scope.data,function(img){
            if(img.imgUrl == ""){
                data[i].imgUrl = "";
                i = i + 1;
                }else{
                i= i+1;
                }
                console.log(data[0].imgUrl);
            }) */
        })

        localStorage.setItem("location",location);

        $('.navigation-xian').animate({left:'2%'},200);
        $('.navigation-xian').css('background-color', 'rgb(226, 116, 43)');
        
        $("#function-content2").css("display","block");

    };
    /* 游戏资讯 */
    $scope.toTwo = function (location) { 
        var sectionId = 2;
        var section = {"sectionId":sectionId}
        //获取后台传回的数据
        homeService.getData(section,function(data){
            $scope.data = data
            
        })

        localStorage.setItem("location",location);

        $('.navigation-xian').animate({left:'27%'},200);
        $('.navigation-xian').css('background-color', 'blueviolet');
        
        $("#function-content2").css("display","block");
    };
    /* 资源分享 */
    $scope.toThree = function (location) { 
        var sectionId = 4;
        var section = {"sectionId":sectionId}
        //获取后台传回的数据
        homeService.getData(section,function(data){
            $scope.data = data
           
        })

        localStorage.setItem("location",location);

        $('.navigation-xian').animate({left:'52%'},200);
        $('.navigation-xian').css('background-color','rgb(226, 43, 43)');
        
        $("#function-content2").css("display","block");
    };
    /* 交易购物 */
    $scope.toFour = function (location) { 
        var sectionId = 3;
        var section = {"sectionId":sectionId}
        //获取后台传回的数据
        homeService.getData(section,function(data){
            $scope.data = data
            console.log(data);
        })

        localStorage.setItem("location",location);

        $('.navigation-xian').animate({left:'77%'},200);
        $('.navigation-xian').css('background-color','blueviolet');
        
        $("#function-content2").css("display","block");
    };

    //回退时记录上一次的点击
    var Num = localStorage.getItem("location");
    if(Num == "Four"){
        console.log("4")
        $scope.toFour();
        localStorage.setItem("location",Num)
    }else if(Num == "Two"){
        console.log("2")
        $scope.toTwo();
        localStorage.setItem("location",Num)
    }else if(Num == "Three"){
        console.log("3")
        $scope.toThree();
        localStorage.setItem("location",Num)
    }else{
        console.log("1")
        $scope.toOne();
        localStorage.setItem("location",Num)
    }

    //获取数据，进行页面跳转到贴子详情页面
    $scope.jumpToDetail = function(id){
        //将数据挂载在hemeService服务器上
        homeService.id = id;
        historyUrlService.setBackUrl(window.location.href);
        $state.go("detail");
        //更新后台信息
        var id = {"id":id}
        homeService.updateLook(id);
    }

    //获取数据，更新贴子观看人数
    

    /* 点赞设置 */
    $scope.clickIcon = function($event,iconName){
        var buttonClasses = $event.currentTarget.className;
        var colorStyle = document.getElementById('like');

        if(buttonClasses.indexOf(iconName + '-outline') > 0){
            buttonClasses = buttonClasses.replace('-outline','');
            colorStyle = colorStyle.style.color = 'red';   
        }else{
            buttonClasses = buttonClasses.replace(iconName,iconName + '-outline');
        }
        $event.currentTarget.className = buttonClasses;
    }

})

