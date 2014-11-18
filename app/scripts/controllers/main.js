'use strict';

/**
 * @ngdoc function
 * @name angularPhonebookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPhonebookApp
 */
angular.module('angularPhonebookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
