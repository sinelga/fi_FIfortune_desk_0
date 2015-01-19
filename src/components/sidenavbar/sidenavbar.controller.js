'use strict';

angular.module('fiFifortuneDesk0')
  .controller('SidenavbarCtrl', function ($scope,zodiacmakerService) {
	  
	var allzodiacs =zodiacmakerService.getZodiacs();
    $scope.zodiacs=allzodiacs;
            
  });
