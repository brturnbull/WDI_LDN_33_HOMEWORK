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
      templateUrl: 'views/things/new.html',
      controller: 'ThingsNewCtrl as thingsNew'
    })
    .state('thingsShow', {
      url: '/things/:id',
      templateUrl: 'views/things/show.html',
      controller: 'ThingsShowCtrl as thingsShow'
    })
    .state('thingsEdit', {
      url: '/things/:id/edit',
      templateUrl: 'views/things/edit.html',
      controller: 'ThingsEditCtrl as thingsEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/auth/register.html',
      controller: 'RegisterCtrl as register'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
