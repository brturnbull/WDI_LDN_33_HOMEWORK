ThingsShowCtrl.$inject = ['Thing', '$state'];

function ThingsShowCtrl(Thing, $state) {
  this.thing = {};

  Thing
    .findById($state.params.id)
    .then(res => this.thing = res.data);

  function handleDelete() {
    Thing.removeById($state.params.id)
      .then(() => $state.go('thingsIndex'));
  }

  this.handleDelete = handleDelete;
}

export default ThingsShowCtrl;
