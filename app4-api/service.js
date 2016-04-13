angular.module('apiApp').service('mainSvc', function($http, $q) {

// ---- Example of $http shorthand -----

    this.getPokemon = function(choose) {
        var deferred = $q.defer();
        $http.get('http://pokeapi.co/api/v2/pokemon/' + choose + '/')
        .then(function(response) {
            deferred.resolve(response.data);
        });
        return deferred.promise;
    };




//  --- Example from another project  ---------

    // this.getUsers = function() {
    //     var anyNameThatRepresentsDeffered = $q.defer();
    //     $http({
    //         method: 'GET',
    //         url: 'http://reqres.in/api/users?page=1'
    //     }).then(function(response){
    //         var parsedResponse = response.data.data;
    //         for (var i = 0; i < parsedResponse.length; i++) {
    //             parsedResponse[i].first_name = 'Bad-Mo-Jamma';
    //         }
    //         anyNameThatRepresentsDeffered.resolve(parsedResponse);
    //     });
    //     return anyNameThatRepresentsDeffered.promise;
    // };













});
