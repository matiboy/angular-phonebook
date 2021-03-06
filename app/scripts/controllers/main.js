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
    $scope.entries = [];
    $scope.type = 'house';
    $scope.addEntry = function() {
      var newEntry = {
        name: $scope.name,
        type: $scope.type,
        details: $scope.details
      };
      $scope.name = '';
      $scope.details = '';
      $scope.entries.push(newEntry);
    };

    $scope.removeEntry = function(index) {
      $scope.entries.splice(index, 1);
    };
  });
