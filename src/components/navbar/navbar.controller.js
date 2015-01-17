'use strict';

angular.module('fiFifortuneDesk0')
  .controller('NavbarCtrl', function ($scope,$location) {
    $scope.date = new Date();
    $scope.domain = $location.host();
  });
