'use strict';

angular.module('fiFifortuneDesk0')
  .controller('MainCtrl', function ($scope,zodiacmakerService) {
	  
		var allzodiacs =zodiacmakerService.getZodiacs();
	    	    
	    var rand = Math.floor(Math.random() *allzodiacs.length);
	    
	    $scope.zodiac = allzodiacs[rand];
	  
        
  });
