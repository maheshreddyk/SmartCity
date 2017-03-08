(function(module){
  'use strict';
  var mapsService = function($http){
    var getAddressCoordinates = function(address){
      var url ="http://maps.google.com/maps/api/geocode/json";
      return $http.get(url, {params:{"address": address}})
      .then(function (response) {
      console. log("Call complete");
        return response.data.results[0].geometry.location ;
      })  ;

    };

    return {
      getAddressCoordinates:getAddressCoordinates
    }

  };
  mapsService.$inject =['$http'];
  module.service('mapsService',mapsService);

}(angular.module('common')));
