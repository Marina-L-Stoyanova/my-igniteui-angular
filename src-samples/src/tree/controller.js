'use strict';

/*
    The factories are created to provide data and services
    to the controllers and are located under the "data" directory. 
    
    All controllers are included in this single file for simplicity. 
	
	Note: Make sure to include the proper data file when using particular
	controller.
*/

var app = angular.module('igniteui-sample', ['igniteui-directives']);

app.controller('treeController',

            ['$scope', 'productCategories',
    function ($scope,   productCategories) {

        $scope.ProductCategories = productCategories.data;

        $scope.deleteProductCategory = function (ix) {
            $scope.ProductCategories.splice(ix, 1);
        };

        $scope.deleteProductSubcategory = function (pix, ix) {
            $scope.ProductCategories[pix].ProductSubcategories.splice(ix, 1);
        };

        $scope.addProductCategory = function () {
            var tmp = angular.copy($scope.newProductCategory);
            $scope.ProductCategories.push(tmp);
        };

        $scope.addProductSubcategory = function (ix) {
            var tmp = angular.copy($scope.newProductSubcategory);
            $scope.ProductCategories[ix].ProductSubcategories.push(tmp);
        };

        $scope.newProductSubcategory = {
            Name: "",
            ProductSubcategoryID: 1,
            Products: []
        };

        $scope.newProductCategory = {
            Name: "",
            ProductCategoryID: 1,
            ProductSubcategories: []
        };

        $scope.addNodeRootLevel = function () {
            $("#tree1").igTree("addNode", { Name: "New Node", ProductCategoryID: $scope.ProductCategories.length + 1 });
        };

        $scope.removeSelectedNode = function () {
            var selected = $('#tree1').igTree('selectedNode');
            if (selected.path !== null) {
                $('#tree1').igTree('removeAt', selected.path);
            } else {
                alert('Select a node from the tree first');
            }
        };

    }]);