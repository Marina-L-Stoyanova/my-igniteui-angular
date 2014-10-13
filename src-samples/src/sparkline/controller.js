'use strict';

/*
    The factories are created to provide data and services
    to the controllers and are located under the "data" directory. 
    
    All controllers are included in this single file for simplicity. 
	
	Note: Make sure to include the proper data file when using particular
	controller.
*/

var app = angular.module('igniteui-sample', ['igniteui-directives']);

app.controller('sparklineController', [
    '$scope', 'invoices',
    function ($scope, invoices) {
        // only needed until https://github.com/angular/angular.js/issues/6683 is resolved
        for (var i = 0; i < invoices.data.length; i++) {
            invoices.data[i].Change = parseFloat(invoices.data[i].Change);
        };
        $scope.invoices = invoices.data;
    }
]);