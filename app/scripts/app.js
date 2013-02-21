'use strict';

angular.module('yoTest1App', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/git', { templateUrl: 'views/git.html', controller: 'GitController' })
      .otherwise({ redirectTo: '/' });
  });
