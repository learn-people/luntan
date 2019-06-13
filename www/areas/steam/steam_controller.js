/* 
*steam标签页的控制器模块
*/

// angular.module('steam.controller',[])

// .controller('SteamController',function($scope,$cordovaImagePicker){
//   //$scope.test = "zz"


//       "use strict";

//       $scope.imgList = [];

//       $scope.openImagePicker = () => {
//         const options = {
//           maximumImagesCount: 11, // 允许一次选中的最多照片数量
//           width: 800, // 筛选宽度
//           height: 600, //筛选高度
//           quality: 100 //图像质量的大小，默认为100
//         };

//         $cordovaImagePicker.getPictures(options)
//           .then(results => {
//             console.log("选中的照片返回一个照片地址数组，可以直接在html中绑定");
//             $scope.imgList = results;
//           }, error => {
//             console.log(error);
//             console.log("打开照片失败");
//           });
//       };
//   });

angular.module("steam.controller",[])
.controller("SteamController", 
  function ($scope,  $cordovaImagePicker) {
    "use strict";
    
     $scope.imgList = [];
 
     $scope.openImagePicker= () => {
        const options = {
            maximumImagesCount: 11, // 允许一次选中的最多照片数量
            width: 800,    // 筛选宽度
            height: 600,    //筛选高度
            quality: 100    //图像质量的大小，默认为100
          };
          
      $cordovaImagePicker.getPictures(options)
        .then(results => {
          console.log("选中的照片返回一个照片地址数组，可以直接在html中绑定");
          $scope.imgList = results;
        }, error => {
          console.log(error);
          console.log("打开照片失败");
        });
     };
 
 });
