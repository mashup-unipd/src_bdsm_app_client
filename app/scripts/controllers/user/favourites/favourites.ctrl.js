(function() {
    'use strict';

/**
 * @ngdoc function
 * @name app.controller:FavouritesCtrl
 * @description
 * # FavouritesCtrl
 * Controller of the app
 */
    var FavouritesCtrl = function(recipeService,userService){
    
        var vm = this;

    vm.favourites=[];
    vm.getGraph=[];
    vm.deleteFavourite = deleteFavourite;
    vm.deleted=false;
    vm.failedDelete=false;
    vm.noFavs=false;
    var graphPromise;

    var favPromise = userService.getFavourites();
    favPromise
        .then(function(list){
            vm.favourites=list.items;
            if(vm.favourites.length === 0){
                vm.noFavs=true;
            }else {
                graphPromise = recipeService.generateFavourites(vm.favourites);

                graphPromise
                    .then(function (list) {
                        list.forEach(function (fav, index) {
                            vm.getGraph.push({
                                graphData: fav[0],
                                id: vm.favourites[index].id
                            });
                        })

                    });
            }
        });

    function deleteFavourite(id){
        var promise= userService.deleteFavourite(id);
        promise
            .then(function(){
                vm.deleted = true;

            },function(){
                vm.failedDelete = true;
            })

    }


    };

    FavouritesCtrl.$inject = ['recipeService','userService'];

    angular.module('app')
        .controller('FavouritesCtrl', FavouritesCtrl);


})();