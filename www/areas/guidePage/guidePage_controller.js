/* 
*引导页的控制器模块
*/

angular.module('guidePage.controller',['guidePage.service'])

.controller('GuidePageController',function($scope,$state,guidePageService){

  //获取引导页数据，并渲染在页面中
  guidePageService.getData(function(data){
    $scope.data = data.rows;
  })

  //使用时间戳生成一个随即参数，渲染网络图片是将参数添加在图片地址后面
  //目的是进行强制刷新，取出缓存
  $scope.param = (new Date).valueOf();

  //点击立即体验，跳转到首页
  $scope.goHome = function(){
    //下次打开APP直接进入首页
    localStorage["isFirst"] = true;
    //利用状态机制跳转到首页
    $state.go('tab.home');
  }

  /* 监听引导页的滑动事件 */
  $scope.slideHasChanged = function(index){
    var item = $('#tips-' + index);
    if(item.hasClass('hidden')){
      item.removeClass('hidden');
      item.addClass('guide-show');
    }
    //单页面已将播放完毕，将class设置为hidden,确保往回滑动时也能播放动画。
    if(index == 0 || index == 2){
      $('#tips-1').removeClass('guide-show');
      $('#tips-1').addClass('hidden');
    }else if(index == 1){
      $('#tips-0').removeClass('guide-show');
      $('#tips-0').addClass('hidden');
    }
  }
})