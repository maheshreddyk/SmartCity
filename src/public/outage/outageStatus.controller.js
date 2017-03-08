(function(module){

  var outageStatusController  = function(outageService){
    var ctrl = this;
     ctrl.outages  = outageService.getOutagesList();

    ctrl.submit = function(){
    };


  }

  outageStatusController.$inject =['outageService'];

module.controller('outageStatusController', outageStatusController);
}(angular.module('public')));
