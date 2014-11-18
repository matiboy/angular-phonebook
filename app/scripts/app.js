'use strict';

/**
 * @ngdoc overview
 * @name angularPhonebookApp
 * @description
 * # angularPhonebookApp
 *
 * Main module of the application.
 */
angular
  .module('angularPhonebookApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
