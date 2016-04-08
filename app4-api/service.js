angular.module('apiApp').service('mainSvc', function($http) {


    this.getPokemon = function(choose) {
        return $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/' + choose + '/'
        }).then(function(response) {
            console.log(response.data);
            return response.data;
        });
    };













});
