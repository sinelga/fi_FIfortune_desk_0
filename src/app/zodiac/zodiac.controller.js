'use strict';

angular.module('fiFifortuneDesk0')
  .controller('ZodiacCtrl', function ($scope,$location,zodiacmakerService,jsonpService) {
	  
	  $scope.loadOK = false;
	  
	  var name = $location.path().split('/')[2];
	  
	  var allzodiacs =zodiacmakerService.getZodiacs();
	  
	  angular.forEach(allzodiacs, function(value, key) {
		  
		  
		  if (value.name === name) {
			  
			  $scope.zodiac = value;
				
			  	var urllink = 'http://'+$location.host()+':80/zodiacinfo?extpath=zodiac/'+value.name;
				console.log(urllink);
				
				jsonpService.getJSON(urllink).then(function (data){
					
					$scope.extinfo=data;
					console.log(data);
					$scope.loadOK = true;
				});
											
			  			  
		  }
		  
		  
	  });
	  
			  	  
  });