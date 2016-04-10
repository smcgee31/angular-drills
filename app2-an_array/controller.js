angular.module('arrayApp').controller('mainCtrl', function($scope, mainSvc) {

    $scope.employees = mainSvc.myData();



});
