angular.module('arrayApp').controller('arrayController', function($scope, mainSvc){

    $scope.test = 'working';
    $scope.people = mainSvc.people;

});
