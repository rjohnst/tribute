'use strict';

/* jasmine specs for controllers go here */
describe('Tribute controllers', function() {

    describe('CrTablesCtrl', function(){

        beforeEach(module('tributeApp'));

        it('should have matchEmptyOrExact match all for an undefined query on page load', inject(function($controller) {
            var scope = {}, ctrl = $controller('CrTablesCtrl', {$scope:scope});
            var undef;

            expect(scope.matchEmptyOrExact(undef)).toBe(false);
        }));

        it('should have matchEmptyOrExact match all for an empty string option', inject(function($controller) {
            var scope = {}, ctrl = $controller('CrTablesCtrl', {$scope:scope});

            expect(scope.matchEmptyOrExact("")).toBe(false);
        }));

        it('should have matchEmptyOrExact match exact for a non-empty string', inject(function($controller) {
            var scope = {}, ctrl = $controller('CrTablesCtrl', {$scope:scope});

            expect(scope.matchEmptyOrExact("42")).toBe(true);
        }));

        it('should create "crTables" model with 20 tables', inject(function($controller) {
            var scope = {}, ctrl = $controller('CrTablesCtrl', {$scope:scope});

            expect(scope.crTables.length).toBe(20);
        }));

        it('should have rollDie return 1 when asking for the result of a d1', inject(function($controller) {
            var scope = {}, ctrl = $controller('CrTablesCtrl', {$scope:scope});

            var sides = 1, timesToRoll = sides * 100;
            do {
                expect(scope.rollDie(sides)).toBe(1);
            } while (timesToRoll-- > 0)
        }));

        it('should have rollDie never return less than 1 or greater than 6 when asking for the result of a d6', inject(function($controller) {
            var scope = {}, ctrl = $controller('CrTablesCtrl', {$scope:scope});

            var sides = 6, timesToRoll = sides * 100, result;
            do {
                result = scope.rollDie(sides);
                expect(result).toBeLessThan(7);
                expect(result).toBeGreaterThan(0);
            } while (timesToRoll-- > 0)
        }));

        it('should have rollDiceAndFactor never return less than 20 or greater than 12 when asking for the result of a 2d6 factored by 4', inject(function($controller) {
            var scope = {}, ctrl = $controller('CrTablesCtrl', {$scope:scope});

            var sides = 6, timesToRoll = sides * 100, result;
            do {
                result = scope.rollDiceAndFactor(2, sides, 4);
                expect(result).toBeLessThan(49);
                expect(result).toBeGreaterThan(7);
            } while (timesToRoll-- > 0)
        }));

    });
});