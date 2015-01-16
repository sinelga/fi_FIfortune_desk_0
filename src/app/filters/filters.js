'use strict';

angular.module('fiFifortuneDesk0')
  .filter('check_if_text', function () {
  
	  return function (input) {
		  
		  
		 if (angular.isString(input) === true) {
		  return input;
		  
		 }

      
    };
  });