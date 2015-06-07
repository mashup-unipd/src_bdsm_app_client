(function() {
    'use strict';

/**
 * @ngdoc function
 * @name app.controller:FavouritesCtrl
 * @description
 * # FavouritesCtrl
 * Controller of the app
 */
    var FavouritesCtrl = function(pieChartCreatorService){
    
        var vm = this;

    vm.dynamicGraph = pieChartCreatorService.chartGeneration();

    vm.testName = vm.dynamicGraph.desc;
    vm.testGraph = vm.dynamicGraph.data;

    };

    FavouritesCtrl.$inject = ['pieChartCreatorService'];

    angular.module('app')
        .controller('FavouritesCtrl', FavouritesCtrl);


})();