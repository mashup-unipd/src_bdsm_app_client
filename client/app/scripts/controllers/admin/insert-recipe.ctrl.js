(function(){
    'use strict';
    /**
     * Name: insertRecipeCtrl.js
     * Author: Tesser Paolo
     * Mail. p.tesser921@gmail.com
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-03-24  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     * 0.0.2    2015-04-18  Tesser Paolo    refactor code, more encapsulate
     * -----------------------------------------------------------
     *
     */


    /**
     * @ngdoc function
     * @name clientApp.controller:InsertRecipeCtrl
     * @description
     * # InsertRecipeCtrl
     * Controller of the clientApp
     */

    /* TODO (p.tesser921@gmail.com): insert RecipeInsertModel as param */
    var InsertRecipeCtrl = function(){

        var vm = this;

        vm.titleRecipe = '';
        vm.descRecipe = '';
        vm.types = [];
        vm.type = '';

        vm.insertSuccess = false;
        vm.insertError = false;

        /* array delle categorie */
        vm.categories = [
            {
                key: 'facebook',
                value: 'Facebook'
            },
            {
                key: 'twitter',
                value: 'Twitter'
            },
            {
                key: 'instagram',
                value: 'Instagram'
            }
        ];

        /* array dei tipi di nodo */
        var typeFacebook = ['evento', 'pagina'];
        var typeTwitter = ['hashtag', 'pagina'];
        var typeInstagram = ['hashtag', 'pagina'];


        vm.insertRecipe = insertRecipe;
        vm.updateTypeMetric = updateTypeMetric;

        function insertRecipe(){

            // var recipe = new RecipeInsertModel('12355458654');

            // recipe.setTitleRecipe(vm.titleRecipe);
            // recipe.setDescRecipe(vm.descRecipe);

            // console.log('Desc Recipe: ' + recipe.descRecipe);

            vm.titleRecipe = '';
            vm.descRecipe = '';
            vm.insertSuccess = true;
        }

        function updateTypeMetric(){
            switch (vm.type){
                case 'facebook': vm.types = typeFacebook; break;
                case 'twitter': vm.types = typeTwitter; break;
                case 'instagram': vm.types = typeInstagram; break;
                default : vm.types = []
            }
            // console.log(vm.types);
        }

    };

    InsertRecipeCtrl.$inject = []; /* TODO (p.tesser921@gmail.com): inject RecipeInsertModel */

    angular
        .module('sbAdminApp')
        .controller('InsertRecipeCtrl', InsertRecipeCtrl);

})();
