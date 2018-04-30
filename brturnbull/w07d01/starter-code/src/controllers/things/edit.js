ThingsEditCtrl.$inject = ['Thing', '$state'];

function ThingsEditCtrl(Thing, $state) {
  this.thing = {};

  Thing.findById($state.params.id)
    .then(res => this.thing = res.data);

  function handleUpdate() {

    if(this.form.$invalid) return false;

    Thing.updateById($state.params.id, this.thing)
      .then(() => $state.go('thingsShow', { id: $state.params.id }));
  }

  function isDanger(field) {
    return (this.form[field].$touched || this.form.$submitted) && this.form[field].$error.required;
  }

  this.handleUpdate = handleUpdate;
  this.isDanger = isDanger;
}

export default ThingsEditCtrl;
