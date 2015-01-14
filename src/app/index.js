'use strict';

angular.module('fiFifortuneDesk0', ['ngAnimate', 'ngCookies', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
