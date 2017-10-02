angular.module('app')
	.factory('$version', version);

version.$inject=['VERSION'];
function version(VERSION) {
	return VERSION;
}
