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
   *
   */

  /**
   * @ngdoc function
   * @name app.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the app
   */

  // TODO: insert Auth Service as param
  var LoginCtrl = function($stateParams, $location){

      var vm = this;

	  vm.credentials = {
      	email: 'info@mashup-unipd.it',
      	pwd: ''
	  };

	  vm.login = login;

	  /////////////////////

	  /**
	   * This function check if the User credentials it's correct
	   * @param cred : object with credentials about User that want login in the system
	   */
	  function login( cred ){
		  console.log('OK');
		  console.log('Email: ' + cred.email);
		  console.log('Pwd: ' + cred.pwd);

		  // TODO: change with a Auth service call and set User if it's correct
		  if (cred.email === 'info@mashup-unipd.it' && cred.pwd === 'pwd'){
			  $location.path('/dashboard/home');
		  }

	  }

  };


  LoginCtrl.$inject = ['$stateParams', '$location']; // TODO: inject Auth Service

  angular
      .module('app')
      .controller('LoginCtrl', LoginCtrl);

})();
