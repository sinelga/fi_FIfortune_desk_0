'use strict';

angular.module('fiFifortuneDesk0')
  .controller('MainCtrl', function ($scope,$location,zodiacmakerService,jsonpService) {
	  
		var allzodiacs =zodiacmakerService.getZodiacs();	    	    
	    var rand = Math.floor(Math.random() *allzodiacs.length);
	    
	    $scope.zodiac = allzodiacs[rand];
	    	    
	    var allfortunetellers = jsonpService.getJSON('http://'+$location.host()+':80/fortunetellers');
	    	    	          
  });
