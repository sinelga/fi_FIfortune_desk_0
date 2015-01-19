'use strict';

angular.module('fiFifortuneDesk0')
  .controller('ZodiacCtrl', function ($scope,$location,$state,zodiacmakerService,jsonpService) {
	  
	  $scope.loadOK = false;
	  var pathOK = false;
	  var zodiacvalue;
	  
	  var zodiacName = $location.path().split('/')[2];
	  
	  var allzodiacs =zodiacmakerService.getZodiacs();
	  	  
	  angular.forEach(allzodiacs, function(value, key) {
		  		  
		  if (value.name === zodiacName) {
			  
			  pathOK = true;			  
			  zodiacvalue = value;
														  			  
		  }
		  		  
	  });
	  
	  
	  if (pathOK) {
		  		  
		  $scope.zodiac = zodiacvalue;
			
		  	var urllink = 'http://'+$location.host()+':80/zodiacinfo?extpath=zodiac/'+zodiacvalue.name;
			
			$scope.extinfo=null;
			jsonpService.getJSON(urllink).then(function (data){
				
				$scope.extinfo=data;
				$scope.loadOK = true;
			});
		  		  
		  
	  } else {
		  
		  $scope.zodiac = null;
		  $scope.loadOK = true;
		  $state.go('home');
		  
		  
	  }
	  			  	  
  });