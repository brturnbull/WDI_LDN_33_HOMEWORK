Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('thingsIndex', {
      url: '/things',
      templateUrl: 'views/things/index.html',
      controller: 'ThingsIndexCtrl as thingsIndex'
    })
    .state('aboutIndex', {
      url: '/about',
      templateUrl: 'views/things/about.html',
      controller: 'AboutIndexCtrl as aboutIndex'
    });
  $urlRouterProvider.otherwise('/');
}

export default Router;
