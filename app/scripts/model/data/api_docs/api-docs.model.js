(function(){
	'use strict';

	/**
	 * Name: app/scripts/model/data/api_docs/api-docs.model.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-22  Carnovalini Filippo    code module
	 * -----------------------------------------------------------
	 *
	 */

	function ApiDocsModel() {


		var services = [

			{

				req: "recipes",
				type: 'GET',
				desc: 'Get the list of the available recipes'
			},
			{
				req: "recipes/{recipe_id}/metrics",
				type: 'GET',
				desc: 'Get the list of a recipe\'s metrics'
			},

			//	-- FACEBOOK

			{
				req: "fb/pages/{page_id}",
				type: 'GET',
				desc: 'Get all the data associated with a Facebook page'
			},
			{
				req: "fb/pages/{page_id}/trend",
				type: 'GET',
				desc: 'Get the data of a Facebook page\'s trends'
			},
			{
				req: "fb/pages/{page_id}/posts",
				type: 'GET',
				desc: 'Get all the data associated with the posts of a Facebook page'
			},
			{
				req: "fb/events/{event_id}",
				type: 'GET',
				desc: 'Get all the data associated with a Facebook event'
			},
			{
				req: "fb/events/{event_id}/trend",
				type: 'GET',
				desc: 'Get the data of a Facebook event\'s trends'
			},
			{
				req: "fb/events/{event_id}/posts",
				type: 'GET',
				desc: 'Get all the data associated with the posts of a Facebook event'
			},

			// 	-- TWITTER

			{
				req: "tw/users/{user_id}",
				type: 'GET',
				desc: 'Get all the data associated with a Twitter user'
			},
			{
				req: "tw/users/{user_id}/trend",
				type: 'GET',
				desc: 'Get the data of a Twitter user\'s trends'
			},
			{
				req: "tw/users/{user_id}/tweets",
				type: 'GET',
				desc: 'Get all the data of a Twitter user\'s tweets'
			},
			{
				req: "tw/users/{hashtag_name}/tweets",
				type: 'GET',
				desc: 'Get all the data of Twitter tweets having a certain hashtag'
			},

			//	-- INSTAGRAM

			{
				req: "ig/users/{user_id}",
				type: 'GET',
				desc: 'Get all the data associated with an Instagram user'
			},
			{
				req: "ig/users/{user_id}/trend",
				type: 'GET',
				desc: 'Get the data of an Instagram user\'s trends'
			},
			{
				req: "ig/users/{user_id}/media",
				type: 'GET',
				desc: 'Get the data of an Instagram user\'s media'
			},
			{
				req: "ig/hashtags/{hashtag_name}/trend",
				type: 'GET',
				desc: 'Get the data of the trends of a certain hashtag on Instagram'
			},
			{
				req: "ig/hashtags/{hashtag_name}/media",
				type: 'GET',
				desc: 'Get the data of the media having a certain hashtag on Instagram'
			}
		];

		return services;

	}

	ApiDocsModel.$inject = [];

	angular
		.module('app.api-docs.data.module')
		.service('ApiDocsModel', ApiDocsModel);

})();