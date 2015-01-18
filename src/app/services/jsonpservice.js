'use strict';

/**
 * @ngdoc service
 * @name oyblogApp.jsonpservice
 * @description
 * # jsonpservice
 * Service in the oyblogApp.
 */
angular.module('fiFifortuneDesk0')
  .service('jsonpService', function ($http) {
	  
	  	  
	  this.getJSON = function(url) {
	  	  
	  		
			  return $http.get(url).then(function(response){
  				  
				  return response.data;				  
				  				  				  
			  });
	  			  
	  	}
	  
	  this.getJSONP= function(url) {
	  	  
	  		return $http.jsonp(url).success(function(response){

	  			return response;
		  	
	  		});
	  
	  	}
	  	  	  	  	  
  });