define(['angular'], function (angular) {
    /* Directives */
    var templateUrl = require.toUrl('./login.html'),
        module = angular.module('angular-login', []),
        directives = {},
        services = {};

    angular.module('angular-login.directives', ['angular-login.authentication'])
        .directive('appLogin', ['version', 'auth', function (version, auth) {
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


    angular.module('angular-login.authentication', []).
        factory('auth', function ($http) {
            function login(username, password) {
                alert(username + "," + password);
                $http.get('/login')
                    .success(function (data, status, header, config) {

                    })
                    .error(function (data, status, headers, config) {

                    });
            }

            return {
                login: login
            };
        });
});

