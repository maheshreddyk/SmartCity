(function(module){

  var outageReportController  = function(outageService, userService){
    var ctrl = this;
     ctrl.user = userService.getProfile();
    ctrl.outageTypes  = outageService.getOutageTypes();
    ctrl.selectedOutageType = ctrl.outageTypes[0];
    ctrl.isSaved = false;
    ctrl.address = ctrl.user.address;
    ctrl.submit = function(){
        ctrl.isSaved = true;
        console.log(ctrl.address);
        var outage = {outageType: ctrl.selectedOutageType,
                      comments: ctrl.comments,
                       address : ctrl.address}

        outageService.saveOutage( outage , ctrl.user);
    };


  }

  outageReportController.$inject =['outageService','userService'];

module.controller('outageReportController', outageReportController);
}(angular.module('public')));
