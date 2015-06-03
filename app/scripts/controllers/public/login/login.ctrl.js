(function(){
  'use strict';

  /**
   * Name: app/scripts/controllers/public/login/login.ctrl.js
   * Author: MashUp
   * Mail: info@mashup-unipd.it
   * Desc: controller that manage system authentication in the login page
   *
   * Modify
   * Version  Date        Author          Desc
   * ==========================================================
   * 0.0.1    2015-04-04  Tesser Paolo    code module
   * -----------------------------------------------------------
   * 0.0.2	  2015-05-10  Tesser Paolo	  insert real function for login operation
   * -----------------------------------------------------------
   *
   */

  /**
   * @ngdoc function
   * @name app.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the app
   */

  var LoginCtrl = function(authService){

      var vm = this;

	  vm.credentials = {
      	email: '',
      	pwd: ''
	  };
	  vm.loginError = false;

	  vm.login = login;

	  /////////////////////

	  /**
	   * This function check if the User credentials it's correct
	   * @param cred : object with credentials about User that want login in the system
	   */
	  function login( cred ){

		  authService.login(cred)

			  .then(function(resp){
				  if (resp.oauth_token === undefined){
						vm.loginError = true;
				  } else {
					  vm.credentials = {
						  email: '',
						  pwd: ''
					  };
				  }

			  })

			  .catch(function(){
				  vm.loginError = true;
			  });
	  }

  };


  LoginCtrl.$inject = ['authService'];

  angular
      .module('app')
      .controller('LoginCtrl', LoginCtrl);

})();
