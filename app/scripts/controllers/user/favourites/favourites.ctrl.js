(function() {
    'use strict';

/**
 * @ngdoc function
 * @name app.controller:FavouritesCtrl
 * @description
 * # FavouritesCtrl
 * Controller of the app
 */
    var FavouritesCtrl = function(recipeService){
    
        var vm = this;

    vm.getGraph=[];
    vm.testName = "";
    vm.testGraph = "";



    var graphPromise= recipeService.generateViews();
    graphPromise
        .then(function(list){
            vm.getGraph.push(list);

            vm.testName = vm.getGraph[0].desc;
            vm.testGraph = vm.getGraph[0].data;

        });


    };

    FavouritesCtrl.$inject = ['recipeService'];

    angular.module('app')
        .controller('FavouritesCtrl', FavouritesCtrl);


})();