define(['angular'], function (angular) {

    var templateUrl = require.toUrl('./login.html'),
        module = angular.module('angular-login', []),
        directives = {},
        services = {};

    module.directive('appLogin', ['auth', function (auth) {
        return {
            restrict: 'E',
            templateUrl: templateUrl,
            scope: {},
            controller: function ($scope) {
                $scope.login = function () {
                    console.log($scope.credentials);
                    auth.login($scope.credentials.email, $scope.credentials.password);
                }
            }
        };
    }]);

    module.factory('auth', function ($http) {
        function login(username, password) {
            console.log(username + "," + password);
            return true;
            /*
             $http.get('/login')
             .success(function (data, status, header, config) {

             })
             .error(function (data, status, headers, config) {

             }); */
        }

        function isLoggedIn() {
            return true;
        }

        return {
            login: login
        };
    });
});


