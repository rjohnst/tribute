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

    $http.get('data/crTables.json').success(function(data) {
        $scope.crTables = data;
    });

    $http.get('data/goodsTable.json').success(function(data) {
        $scope.goodsTable = data;
    });

    $http.get('data/itemsTables.json').success(function(data) {
        $scope.itemsTables = data;
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
    };

    $scope.rollOnPercentileTable = function(table) {
        // TODO decide if this should be 2d10 instead
        this.d100Result = this.rollDie(100);
        var i = 0, row;
        do {
            row = table[i++];
        } while (row.percent < this.d100Result);
        return row;
    }

    $scope.rollTable = function(cr) {
        var crTable = this.crTables.getBy("cr", cr);
        var row = this.rollOnPercentileTable(crTable.table);

        var coins = row.treasure.coins;
        $scope.coinsTotal = this.rollDiceAndFactor(coins.dice.number, coins.dice.sides, coins.factor) + coins.type;
        $scope.coinsFrom = " (from " + this.formatDiceToRoll(coins.dice.number, coins.dice.sides, coins.factor) + ")";
        $scope.goods = row.treasure.goods;
        $scope.rolledGoods = this.rollGoods(row.treasure.goods);
        $scope.items = row.treasure.items;
        $scope.rolledItems = this.rollItems(row.treasure.items);
    };

    $scope.formatDiceToRoll = function(number, sides, factor) {
        return number + "d" + sides + " x " + factor;
    };

    $scope.rollGoods = function(goods) {
        var results = [];

        for (var i = 0; i < goods.length; i++) {
            var good = this.goodsTable.getBy("type", goods[i]);
            var value = good.value;
            var amount = this.rollDiceAndFactor(value.dice.number, value.dice.sides, value.factor) + value.type;

            var example = this.getRandomGood(good.examples);

            results.push(amount + ": e.g.,  " + example);
        }

        return results;
    };

    $scope.addGood = function(goodsIndex) {
        var good = this.goodsTable.getBy("type", this.goods[goodsIndex]);

        var newExample = this.getRandomGood(good.examples);

        this.rolledGoods[goodsIndex] += ", " + newExample;
    };

    $scope.getRandomGood = function(examples) {
        return examples[Math.floor(Math.random() * examples.length)]
    };

    $scope.rollItems = function(items) {
        var results = [];

        for (var i = 0; i < items.length; i++) {
            results.push(this.getRolledItem(items[i]));
        }

        return results;
    };

    $scope.rerollItem = function(itemsIndex) {
        this.rolledItems[itemsIndex] = this.getRolledItem(this.items[itemsIndex])
    };

    $scope.getRolledItem = function(level) {
        var item = this.itemsTables.getBy("level", level);
        var row = this.rollOnPercentileTable(item.table);
        return row.item.name + " [" + row.item.source + "]";
    }
});
