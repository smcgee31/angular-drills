angular.module('app').controller('mainCtrl', function($scope, mainSvc){

    $scope.renters = mainSvc.renterList();






});
