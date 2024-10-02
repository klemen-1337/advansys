app.factory('userService', function($http) {
    var userService = {};

    userService.getUsers = function() {
        return $http.get('https://jsonplaceholder.typicode.com/users');
    };

    return userService;
});