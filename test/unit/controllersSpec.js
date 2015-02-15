'use strict';

/* jasmine specs for controllers go here */
describe('Tribute controllers', function() {

    describe('CrTablesCtrl', function(){

        beforeEach(module('tributeApp'));

        it('should have matchEmptyOrExact match all for an undefined query on page load', inject(function($controller) {
            var scope = {},
                ctrl = $controller('CrTablesCtrl', {$scope:scope}),
                undef;

            expect(scope.matchEmptyOrExact(undef)).toBe(false);
        }));

        it('should have matchEmptyOrExact match all for an empty string option', inject(function($controller) {
            var scope = {},
                ctrl = $controller('CrTablesCtrl', {$scope:scope});

            expect(scope.matchEmptyOrExact("")).toBe(false);
        }));

        it('should have matchEmptyOrExact match exact for a non-empty string', inject(function($controller) {
            var scope = {},
                ctrl = $controller('CrTablesCtrl', {$scope:scope});

            expect(scope.matchEmptyOrExact("42")).toBe(true);
        }));

        it('should create "crTables" model with 20 tables', inject(function($controller) {
            var scope = {},
                ctrl = $controller('CrTablesCtrl', {$scope:scope});

            expect(scope.crTables.length).toBe(20);
        }));

    });
});