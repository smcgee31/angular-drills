angular.module('appRouting')
.controller('detailsCtrl', function($scope, mainSvc) {

    $scope.starships = function() {
        mainSvc.getStarships()
        .then(function(response) {
            console.log(response.data);
            return response.data;
        });
    };




});
