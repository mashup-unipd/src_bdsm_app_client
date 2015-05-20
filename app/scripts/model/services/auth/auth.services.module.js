(function(){
	'use strict';
	/**
	 * Name: app/scripts/model/services/auth/auth.services.module.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-13  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	angular
		.module('app.auth.services.module', [
			'ng-token-auth'
		])
		.config(authConfig);

	/**
	 * This function set the base config for the module ng-token-auth
	 * @param $authProvider
	 */
	function authConfig( $authProvider ){
		// TODO: change value with back-end API url
		$authProvider.configure({
			apiUrl:                  'https://bdsm-app-alpha.appspot.com/_ah/api/bdsmapp_api/1.0',
			tokenValidationPath:     '/auth/validate_token',
			signOutUrl:              '/auth/sign_out',
			emailRegistrationPath:   '/auth',
			accountUpdatePath:       '/users',
			accountDeletePath:       '/auth',
			confirmationSuccessUrl:  window.location.href,
			passwordResetPath:       '/auth/password',
			passwordUpdatePath:      '/auth/password',
			passwordResetSuccessUrl: window.location.href,
			emailSignInPath:         '/auth/sign_in',
			storage:                 'cookies',
			proxyIf:                 function() { return false; },
			proxyUrl:                '/proxy',
			authProviderPaths: {
				github:   '/auth/github',
				facebook: '/auth/facebook',
				google:   '/auth/google'
			},
			tokenFormat: {
				"access-token": "{{ token }}",
				"token-type":   "Bearer",
				"client":       "{{ clientId }}",
				"expiry":       "{{ expiry }}",
				"uid":          "{{ uid }}"
			},
			parseExpiry: function(headers) {
				// convert from UTC ruby (seconds) to UTC js (milliseconds)
				return (parseInt(headers['expiry']) * 1000) || null;
			},
			handleLoginResponse: function(response) {
				return response.data;
			},
			handleAccountResponse: function(response) {
				return response.data;
			},
			handleTokenValidationResponse: function(response) {
				return response.data;
			}
		});

	}

})();