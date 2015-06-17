/**
 * Name: test/e2e/admin-view.po.js
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

var AngularAdminPages = function(){

	var linkRecipe = element(by.linkText('Recipe'));
	var linkFavourites = element(by.linkText('Favourites'));
	var linkRecipeRequest = element(by.linkText('Recipe Request'));
	var linkInsertRecipe = element(by.linkText('New Recipe'));
	var linkListRequest = element(by.linkText('List Request'));
	var linkRecipesRatings = element(by.linkText('Recipes Ratings'));
	var linkUsersConfig = element(by.linkText('Users Config'));

	this.getLinkRecipe = function(){
		return linkRecipe;
	};

	this.getLinkFavourites = function(){
		return linkFavourites;
	};

	this.getLinkRecipeRequest = function(){
		return linkRecipeRequest;
	};

	this.getLinkInsertRecipe = function(){
		return linkInsertRecipe;
	};

	this.getLinkListRequest = function(){
		return linkListRequest;
	};

	this.getLinkRecipesRatings = function(){
		return linkRecipesRatings;
	};

	this.getLinkUsersConfig = function(){
		return linkUsersConfig;
	};


	this.clickLinkRecipe = function(){
		return linkRecipe.click();
	};

	this.clickLinkFavourites = function(){
		return linkFavourites.click();
	};

	this.clickLinkRecipeRequest = function(){
		return linkRecipeRequest.click();
	};

	this.clickLinkInsertRecipe = function(){
		return linkInsertRecipe.click();
	};

	this.clickLinkListRequest = function(){
		return linkListRequest.click();
	};

	this.clickLinkRecipesRatings = function(){
		return linkRecipesRatings.click();
	};

	this.clickLinkUsersConfig = function(){
		return linkUsersConfig.click();
	};

};

module.exports = AngularAdminPages;