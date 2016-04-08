angular.module('employeeApp').controller('mainCtrl', function($scope, mainSvc){

    $scope.getEmployees = function() {
        $scope.employees = mainSvc.employeeList();
    }
    $scope.getEmployees();


    $scope.addNew = function(newEmployee) {
        mainSvc.addEmployee(newEmployee);
        $scope.getEmployees();
    };

    $scope.remove = function(email) {
        mainSvc.remove();
    };

});
