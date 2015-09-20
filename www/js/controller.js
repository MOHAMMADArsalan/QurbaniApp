angular.module('starter')
    .factory("Auth", function ($firebaseAuth) {
        //var ref = new Firebase('https://qurbaniapp.firebaseio.com/login');
        return $firebaseAuth(ref);
    })
//
//.controller('loginController', function ($scope,Auth) {
//        $scope.login = {};
//        $scope.email="";
//        $scope.password="";
//        $scope.CreaterUser = function () {
//            $scope.message = null;
//            $scope.error = null;
//         Auth.$createUser({
//             email  : $scope.email,
//             password : $scope.password
//         }).then(function (userData) {
//             $scope.message = "User created with uid: " + userData.uid;
//         })
//             .catch(function (error) {
//                 alert(error);
//             })
//        }
//
//  })
.controller('FormController', function ($scope,$firebaseArray,$cordovaCamera,$cordovaGeolocation) {

        var ref = new Firebase('https://qurbaniapp.firebaseio.com/userInformation');
         $scope.users = $firebaseArray(ref);
        $scope.user = {};
        $scope.firstName = "";
        $scope.lastName ="";
        $scope.contactNumber ="";
        $scope.email = "";
        $scope.image = "";
        $scope.addUser = function (user) {
            $scope.users.$add({
             firstName : $scope.user.firstName,
             lastName : $scope.user.lastName,
             contactNumber : $scope.user.contactNumber,
             email : $scope.user.email,
               image: $scope.imgSrc = "data:image/jpeg;base64," + imageData

        });

        };
        document.addEventListener('deviceready', function () {
            var options = {
                quality : 50,
                destinationType : Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.CAMERA,
                encodingType : Camera.encodingType.JPEG,
                targetWidth : 100,
                targetHeight : 100,
                popoverOptions : CameraPopoverOptions,
                saveToPhotoAlbum : false,
                correctOrientation : true
            };
            $scope.takePicture = function() {
                $cordovaCamera.getPicture(options).then(function(imageData) {
                    $scope.imgSrc = "data:image/jpeg;base64," + imageData;
                    $scope.image =imageData;
                }, function(err) {
                    console.log(err);
                });
            }

        });
        var zValue = $scope.$eval(attrs.zoom);
        var lat = $scope.$eval(attrs.lat);
        var lng = $scope.$eval(attrs.lng);
        var myLatLng = new google.maps.LatLng(lat,lng);
        mapOptions = {
            zoom : zValue,
            center : myLatLng
        };
        map = new google.maps.Map(element[0],mapOptions);
        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            draggable:true
        });
        google.maps.event.addListener(marker, 'dragend', function(evt){
            console.log('Current Latitude:',evt.latLng.lat(),'Current Longitude:',evt.latLng.lng());
        });

        google.maps.event.addListener(marker, 'dragend', function(evt){
            $scope.$parent.user.latitude = evt.latLng.lat();
            $scope.$parent.user.longitude = evt.latLng.lng();
            $scope.$apply();
        });
        $scope.saveDetails = function(){
            var lat = $scope.user.latitude;
            var lgt = $scope.user.longitude;
            var des = $scope.user.desc;

            ref.$push({
                latitude: lat,
                longitude: lgt,
                description: des
            }).then(function(ref) {
                $scope.user = {};
            }, function(error) {
                console.log("Error:", error);
            });
        };
            $scope.user = {}


});
