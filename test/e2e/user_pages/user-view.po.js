/**
 * Name: test/e2e/user-view.po.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-06-10  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */

var AngularUsersPages = function(){

	var linkRecipe = element(by.linkText('Recipe'));
	var linkFavourites = element(by.linkText('Favourites'));
	var linkRecipeRequest = element(by.linkText('Recipe Request'));


	this.getLinkRecipe = function(){
		return linkRecipe;
	};

	this.getLinkFavourites = function(){
		return linkFavourites;
	};

	this.getLinkRecipeRequest = function(){
		return linkRecipeRequest;
	};

	this.clickLinkRecipe = function(){
		return linkRecipe.click();
	};

	this.clickLinkFavourites = function(){
		return linkFavourites.click();
	};

	this.clickLinkRecipeRequest = function(){
		return linkRecipeRequest.click();
	}


};

module.exports = AngularUsersPages;