angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc) {

    $scope.character = mainSvc.characterData().then(function(response) {
        $scope.response = mainSvc.response;
    });







});
