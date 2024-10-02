var app = angular.module('userApp', []);

// Main Controller
app.controller('MainController', function($scope, userService) {
    // Load users from API
    userService.getUsers().then(function(response) {
        $scope.users = response.data;
    });

    // Select user function
    $scope.selectUser = function(user) {
        $scope.selectedUser = user;
    };

    // Function to delete a user by ID
    $scope.deleteUser = function(userId) {
        $scope.users = $scope.users.filter(user => user.id !== userId); // Update the users array
        if ($scope.selectedUser && $scope.selectedUser.id === userId) {
            $scope.selectedUser = null; // Clear selected user if deleted
        }
    };
});