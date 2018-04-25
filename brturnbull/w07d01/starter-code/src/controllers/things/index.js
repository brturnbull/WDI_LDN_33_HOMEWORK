ThingsIndexCtrl.$inject = ['$http'];

function ThingsIndexCtrl($http) {
  this.all = [];

  $http
    .get('/api/things')
    .then(res => this.all = res.data);
}

export default ThingsIndexCtrl;
