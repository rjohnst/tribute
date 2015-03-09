'use strict';

Array.prototype.getBy = function(prop, val) {
    for (var i=0; i < this.length; i++) {
        if (this[i][prop] == val) {
            return this[i];
        }
    }
}

/* Controllers */

var tributeApp = angular.module('tributeApp', []);

tributeApp.controller('CrTablesCtrl', function($scope, $http) {

    $scope.d100Result;
    $scope.coinsTotal;
    $scope.coinsFrom;
    $scope.goods;
    $scope.items;

    $http.get('data/crTables.json').success(function(data) {
        $scope.crTables = data;
    });

    $scope.matchEmptyOrExact = function(query) {
        return !query || query.length == 0 ? false : true
    };

    $scope.rollDiceAndFactor = function(number, sides, factor) {
        var diceResult = 0;

        for (var i = 1; i <= number; ++i) {
            diceResult += $scope.rollDie(sides);
        }

        return diceResult * factor;
    };

    $scope.rollDie = function(sides) {
        return Math.floor((Math.random() * sides) + 1);
    }

    $scope.rollTable = function(cr) {
        var crTable = this.crTables.getBy("cr", cr);
        // TODO decide if this should be 2d10 instead
        this.d100Result = this.rollDie(100);
        var i = 0, row;
        do {
            row = crTable.table[i++];
        } while (row.percent < this.d100Result);

        var coins = row.treasure.coins;
        this.coinsTotal = this.rollDiceAndFactor(coins.dice.number, coins.dice.sides, coins.factor) + coins.type;
        this.coinsFrom = " (from " + this.formatDiceToRoll(coins.dice.number, coins.dice.sides, coins.factor) + ")";
        this.goods = row.treasure.goods;
        this.items = row.treasure.items;
    }

    $scope.formatDiceToRoll = function(number, sides, factor) {
        return number + "d" + sides + " x " + factor;
    };

});
