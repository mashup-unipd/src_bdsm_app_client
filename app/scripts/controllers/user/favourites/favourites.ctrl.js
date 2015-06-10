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

    var parameter= {
        cat: "Facebook",
        type: "event",
        value: "744734845634041"
    };

    var graphPromise= recipeService.generateViews(parameter);
    graphPromise
        .then(function(list){
            vm.getGraph = list;

            vm.testName = vm.getGraph[0].desc;
            vm.testGraph = vm.getGraph[0].data;

        });


    };

    FavouritesCtrl.$inject = ['recipeService'];

    angular.module('app')
        .controller('FavouritesCtrl', FavouritesCtrl);


})();