'use strict';

describe('Directive: serviceBox', function () {

  // load the directive's module
  beforeEach(module('wisePayApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<service-box></service-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the serviceBox directive');
  }));
});
