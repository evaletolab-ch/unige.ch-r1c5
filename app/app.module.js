// Declare app level module which depends on filters, and services
angular.module('app', ['app.templates'])
	.constant('VERSION', '0.0.1')
	.config(appConfig)
	.run(appRun);


//
// config the module
appConfig.$inject=[]
function appConfig() {
}

//
// init the module
appRun.$inject=['$templateCache','$rootScope'];
function appRun($templateCache,$rootScope) {
}


// Bootstrap (= launch) application
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});