angular.module('app')
	.directive('unigeVersion', unigeVersion);


//
// interpolate version
unigeVersion.$inject=[];
function unigeVersion() {
	return {
		restrict: 'E',
		template: '<span>R1C5 {{ "%VERSION%" | interpolate  }}</span>',
		link: link
	};

	function link($scope, $element, $attrs) {
		// you can do things here if you want!
	}
}	
