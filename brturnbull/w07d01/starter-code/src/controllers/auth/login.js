LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state) {

  this.data = {};

  function handleLogin() {
    $auth.login(this.data)
      .then(() => $state.go('register'));
  }

  this.handleLogin = handleLogin;
}

export default LoginCtrl;
