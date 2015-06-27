'use strict';

/**
 * @ngdoc function
 * @name wisePayApp.controller:PayCtrl
 * @description
 * # PayCtrl
 * Controller of the wisePayApp
 */
angular.module('wisePayApp')
    .controller('PayCtrl', function($scope, $routeParams, creditorService) {
        $scope.ServiceToPay = creditorService.getByParameterName($routeParams.service);
        if ($scope.ServiceToPay == null) {
            $scope.openingMode = 'error';
            alertify.alert('Verify URL parameters.').set('modal', true).set('closable', false);
            return;
        }
    });
