(function(module){

  var userService = function(){
    var profile = { "firstName" : "Mahesh",
                  "lastName" :"Reddy",
                  "email" :"maheshreddy.k@gmail.com",
                  "phone" :"",
                  "address" : ""
                };


      var getProfile = function(){
        return profile;
      }
      var setProfile =function(user){
        profile = user;
      };
      return {
        getProfile:getProfile,
        setProfile: setProfile
      }

  };

  module.service('userService',userService);

}(angular.module('common')));
