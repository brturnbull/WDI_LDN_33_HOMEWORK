// injecting http and state for use
ThingsNewCtrl.$inject = ['Thing', '$http', '$state'];


function ThingsNewCtrl(Thing, $state) {
// this data - invoking an empty object for context
  this.data = {};


  function handleCreate() {
    if(this.form.$invalid) return false;
    
    Thing.create(this.data)
    // then change the state to the index
      .then(() => $state.go('thingsIndex'));

  }

  //making sure this doesnt return any weird things
  this.handleCreate = handleCreate;

}

export default ThingsNewCtrl;
