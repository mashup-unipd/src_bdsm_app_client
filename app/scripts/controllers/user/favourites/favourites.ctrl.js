(function() {
    'use strict';

/**
 * @ngdoc function
 * @name app.controller:FavouritesCtrl
 * @description
 * # FavouritesCtrl
 * Controller of the app
 */
    var FavouritesCtrl = function(chartCreatorService){
    
        var vm = this;

    vm.dynamicGraph = chartCreatorService.chartGeneration();

    vm.testName = vm.dynamicGraph.desc;
    vm.testGraph = vm.dynamicGraph.data;

    };

    FavouritesCtrl.$inject = ['chartCreatorService'];

    angular.module('app')
        .controller('FavouritesCtrl', FavouritesCtrl);


})();