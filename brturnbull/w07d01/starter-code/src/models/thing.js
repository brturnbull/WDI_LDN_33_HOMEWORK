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

  function commentCreate(thingId, data) {
    return $http.post(`/api/things/${thingId}/comments`, data);
  }

  function commentDelete(thingId, commentId) {
    return $http.delete(`/api/things/${thingId}/comments/${commentId}`);
  }

  this.findById = findById;
  this.removeById = removeById;
  this.create = create;
  this.updateById = updateById;
  this.find = find;
  this.commentCreate = commentCreate;
  this.commentDelete = commentDelete;
}

export default Thing;
