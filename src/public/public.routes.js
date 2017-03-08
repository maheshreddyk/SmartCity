(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider.state("home", {
                           url:"/",
                           templateUrl:"src/public/public.html"
     })
     .state("reportoutage",{
       url:"/reportoutage",
       templateUrl:"src/public/outage/reportoutage.template.html",
       controller: 'outageReportController',
      controllerAs: 'outReportCtrl',
     })
     .state("status",{
       url:"/status",
       templateUrl:"src/public/outage/outagestatus.template.html",
       controller: 'outageStatusController',
      controllerAs: 'outStatCtrl',
     });
}
})();
