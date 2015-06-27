'use strict';

/**
 * @ngdoc function
 * @name wisePayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wisePayApp
 */
angular.module('wisePayApp')
    .controller('MainCtrl', function($scope, $location) {
        $scope.go = function(path) {
            if (path != $location.url()) {
                $activityIndicator.startAnimating();
                $timeout(function() {
                    $location.url(path);
                }, 100);
            }
        };
    });
