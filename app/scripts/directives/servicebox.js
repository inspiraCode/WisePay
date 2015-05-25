'use strict';

/**
 * @ngdoc directive
 * @name wisePayApp.directive:serviceBox
 * @description
 * # serviceBox
 */
angular.module('wisePayApp')
    .directive('serviceBox', function() {
        return {
            template: '<div class="fx-zoom-down fx-speed-500 col-xs-4 col-sm-2 col-md-2 ServiceContainer"><span class="ServiceBox noselect text-center">{{service.Name}}</span><div class="hidden-xs" style="height:50px;"></div></div>',
            restrict: 'E',
            scope: {
                service: '='
            },
            replace: true,
            link: function postLink() {}
        };
    });
