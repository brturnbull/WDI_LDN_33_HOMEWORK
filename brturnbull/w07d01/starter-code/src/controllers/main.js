MainCtrl.$inject = ['$transitions', '$auth', '$state'];

function MainCtrl($transitions, $auth, $state) {
  this.navBarIsOpen = false;
  this.isHome = true;

  this.isAuthenticated = $auth.isAuthenticated;

  $transitions.onSuccess({}, (transition) => {
    this.isHome = (transition.to().name === 'home');
  });

  function toggleNav() {
    console.log('click');
    this.navBarIsOpen = !this.navBarIsOpen;
  }

  function logout() {
    $auth.logout();
    $state.go('home');
  }

  this.toggleNav = toggleNav;
  this.logout = logout;

}

export default MainCtrl;
