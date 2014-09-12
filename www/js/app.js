// Ionic re-vision App

angular.module('re-vision', ['ionic', 're-vision.controllers', 're-vision.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/main.html",
      controller: 'AppCtrl'
    })

    .state('app.landing', {
      url: "/landing",
      views: {
        'menuContent' :{
          templateUrl: "templates/landing.html",
          controller: 'LandingCtrl'
        }
      }
    })

    .state('app.question', {
      url: "/questions/:questionId",
      views: {
        'menuContent' :{
          templateUrl: "templates/question.html",
          controller: 'QuestionCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/landing');
});

angular.module('re-vision.controllers', []);
angular.module('re-vision.services', []);