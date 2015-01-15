'use strict';

angular.module('fiFifortuneDesk0')
  .controller('SidenavbarCtrl', function ($scope,$rootScope,$timeout,zodiacmakerService) {

	var allzodiacs =zodiacmakerService.getZodiacs();
    $scope.zodiacs=allzodiacs;
    
    $scope.selectZodiac =  function(zodiac) {
    	
    	$timeout(function() {
			
			$rootScope.$broadcast('zodiacSelected',zodiac);			
			
		}, 100);
    	
		
    	
    };
    
    
    
  });
