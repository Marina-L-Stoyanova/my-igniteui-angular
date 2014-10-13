'use strict';

/*
    The factories are created to provide data and services
    to the controllers and are located under the "data" directory. 
    
    All controllers are included in this single file for simplicity. 
	
	Note: Make sure to include the proper data file when using particular
	controller.
*/

var app = angular.module('igniteui-sample', ['igniteui-directives']);

app.controller('editorsController',

            ['$scope',
    function ($scope) {

        $scope.editors = {
            currency: 12.1,
            date: new Date(),
            editor: 'Infragistics',
            mask: '134-134-134',
            numeric: 123,
            percent: 0.12,
            text: 'Ignite UI'
        };

    }]);