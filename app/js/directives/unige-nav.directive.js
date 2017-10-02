angular.module('app')
	.directive('unigeNav', unigeNav);


//
// inject content
unigeNav.$inject=['$parse','$http'];
function unigeNav ($parse, $http) {
  return {
      templateUrl: '/partials/nav.html',
      restrict: 'E',
      replace:true,
      link: runDirective
  }

  //
  // RUN
  function runDirective(scope, element, attrs) {

  }
}
