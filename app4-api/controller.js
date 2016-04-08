angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc) {


    $scope.getPokemon = function(choose) {
        mainSvc.getPokemon($scope.choose).then(function(response) {
            $scope.pokemon = response;

        });
        clearInputField();
    };

    function clearInputField() {
        $scope.choose = '';
    }










});
