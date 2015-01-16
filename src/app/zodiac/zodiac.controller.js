'use strict';

angular.module('fiFifortuneDesk0')
  .controller('ZodiacCtrl', function ($scope,$rootScope,zodiacinfoService,$location,zodiacmakerService) {
	  
	  $scope.loadOK = false;
	  
	  var name = $location.path().split('/')[2];
	  
	  console.log(name);
	  
	  var allzodiacs =zodiacmakerService.getZodiacs();
	  
	  angular.forEach(allzodiacs, function(value, key) {
		  
		  
		  if (value.name === name) {
			  
			  $scope.zodiac = value;
			  
				var urllink ="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fellit.fi%2Fhoroskoopit%2Fhoroskooppimerkit%2F"+value.link+"%22%20and%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'columnA'%5D%2Fp%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
				
				console.log(urllink);
							
				zodiacinfoService.getJSONP(urllink).then(function (data){
					
					$scope.extinfo=data;
					$scope.loadOK = true;
									
				}); 
			  			  
		  }
		  
//		  console.log(value); 
		  
		  
		  
	  });
	  
	  
	  
	  
	  	  	 	  
//		$rootScope.$on('zodiacSelected', function(event,data) {
//
//			var urllink ="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fellit.fi%2Fhoroskoopit%2Fhoroskooppimerkit%2F"+data.link+"%22%20and%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'columnA'%5D%2Fp%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
//			
//			console.log(urllink);
//						
//			zodiacinfoService.getJSONP(urllink).then(function (data){
//				
//				$scope.extinfo=data;
//								
//			});
//									
//		});
			  	  
  });