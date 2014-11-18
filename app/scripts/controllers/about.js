'use strict';

/**
 * @ngdoc function
 * @name angularPhonebookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPhonebookApp
 */
angular.module('angularPhonebookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
