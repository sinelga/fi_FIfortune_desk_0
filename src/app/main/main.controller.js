'use strict';

angular.module('fiFifortuneDesk0')
  .controller('MainCtrl', function ($scope,$location,jsonpService) {
	  
//		var allzodiacs =zodiacmakerService.getZodiacs();	    	    
//	    var rand = Math.floor(Math.random() *allzodiacs.length);	    
//	    $scope.zodiac = allzodiacs[rand];

	  
	  
	  var allfortunetellers = function() {
		  
		  jsonpService.getJSON('http://'+$location.host()+':80/fortunetellers').then(function(data) {
			  
			  
			  $scope.allfortunetellers =data;
			  
		  },function(error) {
			  
		  });
		  
		  
	  };
	  allfortunetellers();
	  
	    	    
//	  	$scope.allfortunetellers = jsonpService.getJSON('http://'+$location.host()+':80/fortunetellers');
	    	    	          
  });
