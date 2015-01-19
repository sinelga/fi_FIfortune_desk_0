'use strict';

angular.module('fiFifortuneDesk0')
.service('zodiacinfoService', function ($http) {
	
	
	  this.getJSONP= function(url) {
	  	  
	  		return $http.jsonp(url).success(function(response){

	  			return response;
		  	
	  		});
	  
	  };
		
	
});