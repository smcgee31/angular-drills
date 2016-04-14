angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc) {

    $scope.character = mainSvc.getCharacter()
    .then(function(response) {
        $scope.character = response;
    });



});
