'use strict';

/*
    The factories are created to provide data and services
    to the controllers and are located under the "data" directory. 
    
    All controllers are included in this single file for simplicity. 
	
	Note: Make sure to include the proper data file when using particular
	controller.
*/

var app = angular.module('igniteui-sample', ['igniteui-directives']);

// controllers
app.controller('gridController',

            ['$scope', 'northwind',
    function ($scope,   northwind) {
        // only needed until https://github.com/angular/angular.js/issues/6683 is resolved
        for (var i = 0; i < northwind.data.length; i++) {
            northwind.data[i].UnitPrice = parseFloat(northwind.data[i].UnitPrice);
        };
        $scope.northwind = northwind.data;

        var createNewProduct = function () {
            return {
                ProductID: $scope.northwind.length + 1,
                ProductName: null,
                QuantityPerUnit: null,
                UnitPrice: null
            };
        };

        $scope.newProduct = createNewProduct();

        $scope.deleteProduct = function (index) {
            $scope.northwind.splice(index, 1);
        };

        $scope.addProduct = function () {
           
            $scope.northwind.add($scope.newProduct);

            $scope.newProduct = createNewProduct();
        };

        $scope.gridOptions = {
            dataSource: $scope.northwind,
            width: "100%",
            height: "400px",
            primaryKey: "ProductID",
            autoCommit: true,
            autoGenerateColumns: false,
            columns: [
                   { "headerText": "Product ID", "key": "ProductID", "dataType": "number", "width": "50px" },
                   { "headerText": "Name", "key": "ProductName", "dataType": "string", "width": "250px" },
                   { "headerText": "Quantity per unit", "key": "QuantityPerUnit", "dataType": "string", "width": "200px" },
                   { "headerText": "Unit Price", "key": "UnitPrice", "dataType": "string", "width": "100px" }
            ],
            features: [{
                name: "Updating",
                columnSettings: [{
                    columnKey: "ProductID",
                    readOnly: true
                }]
            }, {
                name: "Paging",
                pageSize: 10
            }, {
                name: "Filtering"
            }, {
                name: "Sorting"
            }]

        };

    }]);