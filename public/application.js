var mainApplicationModuleName = 'diary';

var mainApplicationModule = angular.module(mainApplicationModuleName,
		['ngRoute','user','example']);

//decirle a los motores de indexacion que nuestra app es de una unica paguina
mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});