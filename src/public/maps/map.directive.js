(function(){
  "use strict";
  angular.module('public')
  .component('map', {
    templateUrl : "src/public/maps/map.template.html",
    bindings: {
      items: '<'
    },
    controller: locationComponentController
  });


locationComponentController.$inject = ['outageService'];
  function locationComponentController(outageService){
    var ctrl = this;
    ctrl.outageTypes = outageService.getOutageTypes();
    ctrl.items =  outageService.getOutagesList();
    console.log("Curent Outage", ctrl.items);
    var mapOptions = {
       zoom: 10,
       center: new google.maps.LatLng(33.7905201, -84.3373975),
       mapTypeId: google.maps.MapTypeId.roadmap
   }

   ctrl.map = new google.maps.Map(document.getElementById('map'), mapOptions);

   ctrl.markers  =[];
   var infoWindow = new google.maps.InfoWindow();
   var geocoder = new google.maps.Geocoder();

   var createMarker = function (info){

      var image = {
    url:  "images/outages/"+info.outageType+".png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
       var marker = new google.maps.Marker({
           map: ctrl.map,
           position: new google.maps.LatLng(info.lat, info.long),
           title: info.outageType,
           icon : image
       });
       marker.content = '<div class="infoWindowContent">' + info.desc + '</div><div> No of complaints: ' + info.noOfComplaints +'</div>';

       google.maps.event.addListener(marker, 'click', function(){
           infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
           infoWindow.open(ctrl.map, marker);
       });

      //  google.maps.event.addListener(ctrl.map, 'rightclick', function(event) {
      //    geocoder.geocode({
      //      'latLng': event.latLng
      //    }, function(results, status) {
      //      if (status == google.maps.GeocoderStatus.OK) {
      //        if (results[0]) {
      //          console.log(results[0].formatted_address);
      //        }
      //      }
      //    });
      //  });

    //    google.maps.event.addListener(ctrl.map, "rightclick", function(event) {
    //      var lat = event.latLng.lat();
    //      var lng = event.latLng.lng();
    // // populate yor box/field with lat, lng
    //   console.log("Lat=" + lat + "; Lng=" + lng);
    // });

       ctrl.markers.push(marker);

   };

   for (var i = 0; i < ctrl.items.length; i++){
       createMarker(ctrl.items[i]);
   }

   ctrl.openInfoWindow = function(e, selectedMarker){
       e.preventDefault();
       google.maps.event.trigger(selectedMarker, 'click');
   }

  }

})();
