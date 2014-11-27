angular.module('example').config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'app/views/example.client.view.html'
		}).otherwise({
			redirectTo: '/'
		});
	}
]);