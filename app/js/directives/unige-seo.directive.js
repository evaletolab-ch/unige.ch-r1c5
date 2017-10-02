angular.module('app')
	.directive('unigeSeo', unigeSeo);


//
// inject content
unigeSeo.$inject=['$parse','$http'];
function unigeSeo ($parse, $http) {
  return {
      templateUrl: '/partials/seo-view.html',
      restrict: 'E',
      replace:true,
      scope:{},
      link: runDirective
  }

  //
  // RUN
  function runDirective(scope, element, attrs) {
    scope.timeout=parseInt(attrs.timeout||0);
    scope.json=attrs.json||'seo-a.json';
    setTimeout(function(){
      $http({method: 'GET',url: scope.json}).then(function(response) {
        //
        // wait before interpolate template
          scope.title=response.data.title;
          scope.content=response.data.content;        
        console.log('-------------2',scope.timeout)
      }, function(response) {
        console.log('------------',response.data)
      });
    },scope.timeout);

  }
}
