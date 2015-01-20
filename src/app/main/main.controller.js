'use strict';

angular.module('fiFifortuneDesk0')
  .controller('MainCtrl', function ($scope,$rootScope,$location,$state,$timeout,jsonpService,zodiacmakerService) {

	  
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
		    $timeout(function() {
		    	
		    	$rootScope.$broadcast('selectfortuneteller', {fortuneteller:fortuneteller});
		    	
		    },500);
		  
		   
		   
		    
		  $state.go('zodiac',{sign: zodiac.name});
		  
		  

		  
	  };
	    	    	          
  });
