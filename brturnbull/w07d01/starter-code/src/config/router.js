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
    .state('thingsAbout', {
      url: '/about',
      templateUrl: 'views/things/about.html',
      controller: 'ThingsAboutCtrl as thingsAbout'
    })
    .state('thingsNew', {
      url: '/new',
      templateUrl: 'views/things/new.html'
    });
  $urlRouterProvider.otherwise('/');
}

export default Router;
