// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase','ngCordova'])
    .config(function ($stateProvider,$urlRouterProvider) {
      $stateProvider
          .state('home', {
              url : '/home',
              templateUrl : 'templates/home.html'
          })
          .state('qurbani1', {
              url : '/qurbani1',
              templateUrl  : 'templates/qurbani1.html'
          })     .state('qurbani2', {
              url : '/qurbani2',
              templateUrl  : 'templates/qurbani2.html'
          })
          .state('form', {
              url : '/form',
              templateUrl : 'templates/form.html',
              controller : 'FormController'
          })
          .state('uniqueId', {
              url : '/uniqueId',
              templateUrl : 'templates/uniqueID.html'
          });
          //.state('login', {
          //    url : '/login',
          //    templateUrl: 'templates/login.html',
          //    controller : 'loginController'
          //});
        $urlRouterProvider.otherwise('/qurbani1')
    })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        })

    });


