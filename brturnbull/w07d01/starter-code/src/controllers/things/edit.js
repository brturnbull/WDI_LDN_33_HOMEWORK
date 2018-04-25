ThingsEditCtrl.$inject = ['Thing', '$state'];

function ThingsEditCtrl(Thing, $state) {
  this.thing = {};

  Thing.findById($state.params.id)
    .then(res => this.thing = res.data);

  function handleUpdate() {
    Thing.updateById($state.params.id, this.thing)
      .then(() => $state.go('thingsShow', { id: $state.params.id }));
  }

  this.handleUpdate = handleUpdate;
}

export default ThingsEditCtrl;
