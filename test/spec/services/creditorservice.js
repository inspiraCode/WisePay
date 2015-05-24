'use strict';

describe('Service: creditorService', function () {

  // load the service's module
  beforeEach(module('wisePayApp'));

  // instantiate service
  var creditorService;
  beforeEach(inject(function (_creditorService_) {
    creditorService = _creditorService_;
  }));

  it('should do something', function () {
    expect(!!creditorService).toBe(true);
  });

});
