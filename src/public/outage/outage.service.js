(function(module){




var outageService = function(mapsService, localStorage){

  var _outages = [
      {
          outageType : 'RoadHazard',
          desc : 'There is a fallen tree on I-285',
          noOfComplaints : 5,
          lat : 33.848572,
          long : -84.3757447,
          address: "Atlanta Tech Village, Piedmont Road Northeast, Atlanta, GA",
          status: "Pending",
          reportedDate :"1/22/2017",
          resolvedDate :""
      },
      {
          outageType : 'PowerOutage',
          desc : 'Power outage in school',
          noOfComplaints : 10,
          lat : 33.8664598,
          long : -84.31462,
          address: "4166 Buford Hwy NE, Atlanta, GA 30345",
          status: "Pending",
          reportedDate :"1/21/2017",
          resolvedDate :""
      },
      {
          outageType : 'Flooding',
          desc : '400 S Flooding',
          noOfComplaints : 30,
          lat : 33.810168,
          long : -84.395682,
          address: "2142 Buford Hwy NE, Atlanta, GA 30345",
          status: "Pending",
          reportedDate :"1/19/2017",
          resolvedDate :""
      }  ];

      localStorage.add("OUTAGES", _outages);
     var getOutageTypes = function(){
       var outageTypes =['RoadHazard', 'PowerOutage', 'Flooding','SinkHole','ElectricHazard'];
       return outageTypes;
     };
     var getOutagesList = function(){
       //return outages;
       return localStorage.get("OUTAGES");
     }
    var saveOutage = function(outage, user){
      mapsService.getAddressCoordinates(outage.address).then(function(coordinates){
        console.log("Service",outage.address);
        var existingRec =false;
        var outages = localStorage.get("OUTAGES");
        for(var i=0; i< outages.length; i++)
        {
          if(outages[i].lat == coordinates.lat &&
          outages[i].long == coordinates.lng &&
          outages[i].outageType == outage.outageType )
          {
            outages[i].noOfComplaints++;
            existingRec = true;
          }
        }
        if(!existingRec){
          outages.push({ outageType : outage.outageType,
                      desc : outage.comments,
                    noOfComplaints: 1,
                    lat :coordinates.lat,
                    long : coordinates.lng,
                  address: outage.address,
                status :"Pending",
                reportedDate : new Date()
              });
            }
              localStorage.add("OUTAGES", outages);

      });




    };

  return {
    getOutageTypes: getOutageTypes,
    saveOutage: saveOutage,
    getOutagesList: getOutagesList
  }
}

outageService.$inject=['mapsService', 'localStorage']
module.service('outageService', outageService);
}(angular.module('public')));
