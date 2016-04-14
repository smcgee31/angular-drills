angular.module('appRouting')
.service('mainSvc', function($http) {


    var getStarships = function() {
        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/starships/'
        })
        .then(function(response) {
            console.log(response.results);
            return response.results;
        });
    };





});
