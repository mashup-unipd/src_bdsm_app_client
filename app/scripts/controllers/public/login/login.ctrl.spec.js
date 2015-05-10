describe('app', function () {

    var $controller;

    beforeEach(function () {

        module('app');

        inject(function (_$controller_) {

            $controller = _$controller_('LoginCtrl');

        });
    });

    //-- spec - test controller

    describe('Controller : LoginCtrl', function () {

        it('should have a LoginCtrl controller', function(){
            // expect(app.LoginCtrl).toBeDefined();
        });

    });

});
