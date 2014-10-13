'use strict';

/*
    The factories are created to provide data and services
    to the controllers and are located under the "data" directory. 
    
    All controllers are included in this single file for simplicity. 
	
	Note: Make sure to include the proper data file when using particular
	controller.
*/

var app = angular.module('igniteui-sample', ['igniteui-directives']);

app.controller('comboController',

            ['$scope', 'northwind',
    function ($scope,   northwind) {

        $scope.northwind = northwind.data;

        $scope.combo = {
            value1: 20,
            value2: "Chang"
        };

    }
]);