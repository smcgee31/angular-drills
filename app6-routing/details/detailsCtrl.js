angular.module('appRouting')
.controller('detailsCtrl', function($scope, mainSvc) {

    $scope.starships = function() {
        service.getStarships()
        .then(function(response) {
            console.log(response);
            $scope.starships = response;
        });
    };




});
