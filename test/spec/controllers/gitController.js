'use strict';

describe('Controller: GitControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTest1App'));

  var GitControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    GitControllerCtrl = $controller('GitControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
