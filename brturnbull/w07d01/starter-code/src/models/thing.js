Wine.$inject = ['http'];

function Wine($http) {
  function find() {
    return $http.get('/api/wines');
  }

  this.find = find;
}
