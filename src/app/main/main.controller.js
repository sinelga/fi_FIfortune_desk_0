'use strict';

angular.module('fiFifortuneDesk0')
  .controller('MainCtrl', function ($scope,$location,$state,jsonpService,zodiacmakerService) {

	  
	  var allfortunetellers = function() {
		  
		  jsonpService.getJSON('http://'+$location.host()+':80/fortunetellers').then(function(data) {
			  
			  
			  $scope.allfortunetellers =data;
			  
		  },function(error) {
			  
		  });
		  
		  
	  };
	  allfortunetellers();
	  
	  
	  $scope.selectFortuneteller = function(fortuneteller) {
		  
			var allzodiacs =zodiacmakerService.getZodiacs();	    	    
		    var rand = Math.floor(Math.random() *allzodiacs.length);	    
		    var zodiac = allzodiacs[rand];
		  
		  $location.path("/zodiac/"+zodiac.name);

		  
	  };
	    	    	          
  });
