'use strict';

angular.module('fiFifortuneDesk0')
  .controller('ZodiacCtrl', function ($scope,$location,$state,$stateParams,$timeout,zodiacmakerService,jsonpService) {
	  
	  $scope.loadOK = false;
	  var pathOK = false;
	  var zodiacvalue;
	  
	  var fortunetellerSelected = false;
	  
	  
	  $scope.$on('selectfortuneteller', function(event, args) {


		    $scope.fortuneteller = args.fortuneteller;
		    fortunetellerSelected = true;

	  });
	  
	  
	  
	  var zodiacName = $location.path().split('/')[2];
	  
	  var allzodiacs =zodiacmakerService.getZodiacs();
	  	  
	  angular.forEach(allzodiacs, function(value, key) {
		  		  
		  if (value.name === zodiacName) {
			  
			  pathOK = true;			  
			  zodiacvalue = value;
														  			  
		  }
		  		  
	  });
	  	  
	  
	  if (pathOK) {
		  
		  $timeout(function() {
		  
		  if (fortunetellerSelected === false) {
		  
		  var allfortunetellers = function() {
			  
			  jsonpService.getJSON('http://'+$location.host()+':80/fortunetellers').then(function(data) {
				  
				  
				  $scope.allfortunetellers =data;
				  
				    var rand = Math.floor(Math.random() *data.length);	    
				    $scope.fortuneteller = data[rand];
				  
								  
				  
			  },function(error) {
				  
			  });
			  
			  
		  };
		  allfortunetellers();
		  
	  	}
		  
		  },1000);
		  		  
		  		  
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