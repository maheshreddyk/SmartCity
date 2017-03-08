(function(module){

  var outageMapController  = function(outageService){
    var ctrl = this;
    ctrl.items  = outageService.outages;
    
  }

  outageMapController.$inject =['outageService'];

module.controller('outageMapController', outageMapController);
}(angular.module('public')));
