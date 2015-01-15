'use strict';

angular.module('fiFifortuneDesk0')
  .controller('ZodiacCtrl', function ($scope,$rootScope) {
	  

	  
	  
////		$rootScope.$on('allzodiacs', function(event,data) {
//
////			$scope.zodiac = data;
//			
//			console.log(data);
//			
//		});
	  
	 	  
		$rootScope.$on('zodiacSelected', function(event,data) {

			$scope.zodiac = data;
			
		});
	  
	  
  });