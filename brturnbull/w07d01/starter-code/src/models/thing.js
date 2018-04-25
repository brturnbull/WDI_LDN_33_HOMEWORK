Thing.$inject = ['$http'];

function Thing($http) {
  function find() {
    return $http.get('/api/thing');
  }

  function findById(id) {
    return $http.get(`/api/things/${id}`);
  }

  function removeById(id) {
    return $http.delete(`/api/things/${id}`);
  }

  function create(data) {
    return $http.post('/api/things', data);
  }

  function updateById(id, data) {
    return $http.put(`/api/things/${id}`, data);
  }

  this.findById = findById;
  this.removeById = removeById;
  this.create = create;
  this.updateById = updateById;
  this.find = find;
}

export default Thing;
