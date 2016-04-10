angular.module('apiApp').service('mainSvc', function($http) {

    this.getCharacter = function() {
        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/people/1/'
        }).then(function(response) {
            return response.data;
        });
    };




});
