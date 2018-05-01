ThingsShowCtrl.$inject = ['Thing', '$state'];

function ThingsShowCtrl(Thing, $state) {
  this.thing = {};
  this.data = {};

  Thing
    .findById($state.params.id)
    .then(res => this.thing = res.data);

  function handleDelete() {
    Thing.removeById($state.params.id)
      .then(() => $state.go('thingsIndex'));
  }

  function handleCommentCreate() {
    Thing.commentCreate($state.params.id, this.data)
      //perform this function using the states parameters and the new data
      .then(res => this.thing = res.data);
    // response is reflecting the new data as updating responds with the
    // whole thing object and not just the comment
  }

  function handleCommentDelete(comment) {
    Thing.commentDelete($state.params.id, comment._id)
      .then(res => this.thing = res.data);
  }

  this.handleDelete = handleDelete;
  this.handleCommentCreate = handleCommentCreate;
  this.handleCommentDelete = handleCommentDelete;
}

export default ThingsShowCtrl;
