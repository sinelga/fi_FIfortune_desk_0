'use strict';

angular.module('fiFifortuneDesk0', ['ngAnimate', 'ngCookies', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      }).state('zodiac', {
          url: '/zodiac/:sign',
          templateUrl: 'app/zodiac/zodiac.html',
          controller: 'ZodiacCtrl'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    
  })
;
