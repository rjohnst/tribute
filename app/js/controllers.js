'use strict';

/* Controllers */

var tributeApp = angular.module('tributeApp', []);

tributeApp.controller('CrTablesCtrl', function($scope) {
    $scope.matchEmptyOrExact = function(query) {
        return !query || query.length == 0 ? false : true
    };

    $scope.crTables = [
        {"cr" : "1", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 0, "sides" : 0 }, "factor" : 0, "type" : "" }, "goods" : [ ], "items" : [ ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 3 }, "factor" : 1000, "type" : "cp" }, "goods" : [ ], "items" : [ ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 3 }, "factor" : 100, "type" : "sp" }, "goods" : [ ], "items" : [ "1/2" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 6 }, "factor" : 100, "type" : "sp" }, "goods" : [ "A" ], "items" : [ "1" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 100, "type" : "sp" }, "goods" : [ "B" ], "items" : [ "1" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 10, "type" : "gp" }, "goods" : [ "A" ], "items" : [ "1", "1/2" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "A" ], "items" : [ ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B" ], "items" : [ "1" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "A" ], "items" : [ "1", "1/2" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 10, "type" : "pp" }, "goods" : [ "B" ], "items" : [ "1", "1/2" ] }}
        ]},
        {"cr" : "2", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 1000, "type" : "cp" }, "goods" : [ ], "items" : [ ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 6 }, "factor" : 100, "type" : "sp" }, "goods" : [ "A", "A" ], "items" : [ ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 100, "type" : "sp" }, "goods" : [ ], "items" : [ "1" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "1", "1/2" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "A", "B" ], "items" : [ "1", "1" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B" ], "items" : [ "1", "1", "1/2" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B" ], "items" : [ "1", "1/2" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "A", "A" ], "items" : [ "1", "1" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B" ], "items" : [ "2" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 10, "type" : "pp" }, "goods" : [ "B" ], "items" : [ "2" ] }}
        ]},
        {"cr" : "3", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "1" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "B" ], "items" : [ "1" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "2" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "C" ], "items" : [ "2" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "C", "C" ], "items" : [ "2" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B", "B" ], "items" : [ "2", "1" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "C", "C" ], "items" : [ "2", "1/2" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "C", "C" ], "items" : [ "2", "1" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "C", "B", "B" ], "items" : [ "3" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 10, "type" : "pp" }, "goods" : [ "D", "C" ], "items" : [ "3" ] }}
        ]},
        {"cr" : "4", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "1", "1/2" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "C" ], "items" : [ "1", "1" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "2", "1" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "B", "C" ], "items" : [ "2", "1" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "B", "D" ], "items" : [ "2", "1" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B", "C" ], "items" : [ "3" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B", "D" ], "items" : [ "2", "1" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "D" ], "items" : [ "3" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "C", "C", "C" ], "items" : [ "3", "1" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 10, "type" : "pp" }, "goods" : [ "C", "D" ], "items" : [ "4" ] }}
        ]},
        {"cr" : "5", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "2" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "D" ], "items" : [ "2" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "3" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "B", "D" ], "items" : [ "3" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "C", "E" ], "items" : [ "3" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B", "D" ], "items" : [ "4" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "C", "E" ], "items" : [ "3" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B", "C", "D" ], "items" : [ "4" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B", "B", "E" ], "items" : [ "5" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 10, "type" : "pp" }, "goods" : [ "C", "E" ], "items" : [ "5" ] }}
        ]},
        {"cr" : "6", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "3" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "D", "B" ], "items" : [ "3" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "C", "C" ], "items" : [ "3", "1" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "C", "D" ], "items" : [ "3", "1" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "B", "D", "E" ], "items" : [ "3", "1" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "C", "D" ], "items" : [ "4" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "F" ], "items" : [ "3", "1" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "D", "E" ], "items" : [ "4", "2" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "F" ], "items" : [ "5" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 10, "type" : "pp" }, "goods" : [ "B", "D", "E" ], "items" : [ "6" ] }}
        ]},
        {"cr" : "7", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ ], "items" : [ "3" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 6 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "D", "C" ], "items" : [ "3" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "D" ], "items" : [ "3", "1" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E" ], "items" : [ "4" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "D", "C" ], "items" : [ "4" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E" ], "items" : [ "4", "2" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "D" ], "items" : [ "4", "2" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E" ], "items" : [ "5", "1" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "D" ], "items" : [ "6" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 10, "type" : "pp" }, "goods" : [ "E", "D" ], "items" : [ "7" ] }}
        ]},
        {"cr" : "8", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "D" ], "items" : [ "4" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "E" ], "items" : [ "4" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "D", "C" ], "items" : [ "4", "1" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "C" ], "items" : [ "5" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "D", "D" ], "items" : [ "5" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "C" ], "items" : [ "6" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "C" ], "items" : [ "6" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F" ], "items" : [ "6", "3" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 10, "type" : "pp" }, "goods" : [ "F", "C" ], "items" : [ "7" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 10, "type" : "pp" }, "goods" : [ "F", "C" ], "items" : [ "8" ] }}
        ]},
        {"cr" : "9", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "D", "C" ], "items" : [ "4" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "E", "C" ], "items" : [ "4", "1" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E" ], "items" : [ "5" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F" ], "items" : [ "5" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "D" ], "items" : [ "6" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F" ], "items" : [ "6", "3" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "D" ], "items" : [ "6", "2" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F" ], "items" : [ "7" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 10, "type" : "pp" }, "goods" : [ "F", "D" ], "items" : [ "8" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 10, "type" : "pp" }, "goods" : [ "F", "D" ], "items" : [ "9" ] }}
        ]},
        {"cr" : "10", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "E" ], "items" : [ "5" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "F" ], "items" : [ "5" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "E", "D" ], "items" : [ "6" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 6, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "E" ], "items" : [ "6", "1" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "F" ], "items" : [ "6", "2" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "E", "D" ], "items" : [ "7" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "F", "D" ], "items" : [ "7" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 10 }, "factor" : 10, "type" : "pp" }, "goods" : [ "F", "F" ], "items" : [ "8" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 6, "sides" : 4 }, "factor" : 10, "type" : "pp" }, "goods" : [ "F", "F", "D" ], "items" : [ "9" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 10 }, "factor" : 10, "type" : "pp" }, "goods" : [ "F", "F", "D" ], "items" : [ "10" ] }}
        ]},
        {"cr" : "11", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 6, "sides" : 4 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "F" ], "items" : [ "6" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "F", "E" ], "items" : [ "6" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F" ], "items" : [ "7" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 8 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "F" ], "items" : [ "7" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 6, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "G" ], "items" : [ "7", "2" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 6, "sides" : 4 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F", "F", "D" ], "items" : [ "8" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 10 }, "factor" : 100, "type" : "gp" }, "goods" : [ "G", "F" ], "items" : [ "8" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 10 }, "factor" : 10, "type" : "pp" }, "goods" : [ "G", "E" ], "items" : [ "9" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 10 }, "factor" : 10, "type" : "pp" }, "goods" : [ "G", "F" ], "items" : [ "10" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 10 }, "factor" : 10, "type" : "pp" }, "goods" : [ "G", "F" ], "items" : [ "11" ] }}
        ]},
        {"cr" : "12", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 12 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "F" ], "items" : [ "7" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 8 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "F", "D", "C" ], "items" : [ "7" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 12 }, "factor" : 1000, "type" : "sp" }, "goods" : [ "F" ], "items" : [ "8" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "G" ], "items" : [ "8" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "E" ], "items" : [ "8" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G" ], "items" : [ "9" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H" ], "items" : [ "9" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "G", "F", "F" ], "items" : [ "10" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H" ], "items" : [ "11" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H" ], "items" : [ "12" ] }}
        ]},
        {"cr" : "13", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 12 }, "factor" : 100, "type" : "gp" }, "goods" : [ "F" ], "items" : [ "8" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "F", "E", "C" ], "items" : [ "8" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "F", "C" ], "items" : [ "9" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "D" ], "items" : [ "9" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "F" ], "items" : [ "10" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "E" ], "items" : [ "10", "5" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "E" ], "items" : [ "11" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H" ], "items" : [ "11", "5" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "F" ], "items" : [ "12" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "F" ], "items" : [ "13" ] }}
        ]},
        {"cr" : "14", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "F", "D" ], "items" : [ "9" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "F", "E" ], "items" : [ "9" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "F", "D" ], "items" : [ "10" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "F" ], "items" : [ "10", "5" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H" ], "items" : [ "11" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "F" ], "items" : [ "11", "6" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "F" ], "items" : [ "12" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H" ], "items" : [ "12", "5" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "G" ], "items" : [ "13" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "G" ], "items" : [ "14" ] }}
        ]},
        {"cr" : "15", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G" ], "items" : [ "10" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "F" ], "items" : [ "10" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "E" ], "items" : [ "11" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "F" ], "items" : [ "11" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "G" ], "items" : [ "12" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "F" ], "items" : [ "12", "8" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "G", "E" ], "items" : [ "13" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "G" ], "items" : [ "13", "6" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "G", "F" ], "items" : [ "14" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 100, "type" : "pp" }, "goods" : [ "H", "G", "F" ], "items" : [ "15" ] }}
        ]},
        {"cr" : "16", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "E" ], "items" : [ "11" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H" ], "items" : [ "11" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 10 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "G", "F" ], "items" : [ "12" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "G" ], "items" : [ "12", "6" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "13" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "G" ], "items" : [ "13", "8" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "F", "E" ], "items" : [ "14" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "E" ], "items" : [ "14", "8" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "F", "E" ], "items" : [ "15" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "F", "E" ], "items" : [ "16" ] }}
        ]},
        {"cr" : "17", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H" ], "items" : [ "12" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "F", "F" ], "items" : [ "12" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 1, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "F" ], "items" : [ "13" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "13" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "G" ], "items" : [ "14" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "14", "7" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "G" ], "items" : [ "15" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "16" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "G" ], "items" : [ "17" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "G" ], "items" : [ "18" ] }}
        ]},
        {"cr" : "18", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "G" ], "items" : [ "13" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "14" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "H", "G" ], "items" : [ "14", "9" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "15" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "H" ], "items" : [ "15"  ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "F" ], "items" : [ "16" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "G" ], "items" : [ "17" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "F" ], "items" : [ "18" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "G" ], "items" : [ "19" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 4 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "G" ], "items" : [ "20" ] }}
        ]},
        {"cr" : "19", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "14" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "F" ], "items" : [ "15" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I" ], "items" : [ "15", "7" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 8 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "F" ], "items" : [ "16" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "H" ], "items" : [ "16", "10" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "F" ], "items" : [ "17" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 8 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H" ], "items" : [ "18" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 8 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "F" ], "items" : [ "19" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H" ], "items" : [ "20" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 3, "sides" : 8 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H" ], "items" : [ "21" ] }}
        ]},
        {"cr" : "20", "table" : [
            {"percent" : 7, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "F", "F" ], "items" : [ "15" ] }},
            {"percent" : 10, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "H" ], "items" : [ "16" ] }},
            {"percent" : 21, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 10 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "F", "F" ], "items" : [ "17" ] }},
            {"percent" : 44, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "H" ], "items" : [ "18" ] }},
            {"percent" : 60, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 1000, "type" : "gp" }, "goods" : [ "I", "H", "G" ], "items" : [ "19" ] }},
            {"percent" : 78, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H" ], "items" : [ "20" ] }},
            {"percent" : 83, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H", "G" ], "items" : [ "21" ] }},
            {"percent" : 91, "treasure" : { "coins" : { "dice" : { "number" : 4, "sides" : 6 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H" ], "items" : [ "22" ] }},
            {"percent" : 96, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H", "G" ], "items" : [ "23" ] }},
            {"percent" : 99, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "H", "G" ], "items" : [ "24" ] }},
            {"percent" : 100, "treasure" : { "coins" : { "dice" : { "number" : 2, "sides" : 12 }, "factor" : 100, "type" : "pp" }, "goods" : [ "I", "I" ], "items" : [ "25" ] }}
        ]}
    ];
});
