'use strict';

/**
 * @ngdoc overview
 * @name wisePayApp
 * @description
 * # wisePayApp
 *
 * Main module of the application.
 */
angular
  .module('wisePayApp', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFx',
    'ngAnimate'
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
      .when('/pay', {
        templateUrl: 'views/pay.html',
        controller: 'PayCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
