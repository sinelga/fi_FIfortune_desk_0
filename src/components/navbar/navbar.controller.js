'use strict';

angular.module('fiFifortuneDesk0')
  .controller('NavbarCtrl', function ($scope,$state) {
    $scope.date = new Date();
    
    $scope.state = $state.current.name;
    
    console.log($state.current.name);
    
  });
