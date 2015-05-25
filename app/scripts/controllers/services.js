'use strict';

/**
 * @ngdoc function
 * @name wisePayApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the wisePayApp
 */
angular.module('wisePayApp')
    .controller('ServicesCtrl', function($scope, creditorService, $timeout) {
        $scope.items = creditorService.getAll();
        $scope.services = [];
        $scope.addService = function(index) {
            if (index === undefined) {
                index = 0;
            }
            if ($scope.items[index]) {
                $timeout(function() {
                    $scope.services.push($scope.items[index]);
                    $scope.addService(++index);
                }, 100);
            } else {
                return;
            }
        };
        $scope.addAllServices = function() {
            for (var i = 0; i < $scope.items.length; i++) {
                $scope.addSingleService($scope.items[i]);
            }
        };
        $scope.addSingleService = function(theService) {
            $timeout(function() {
                $scope.services.push(theService);
            }, 2000);
        };
        $scope.addService();
    });
