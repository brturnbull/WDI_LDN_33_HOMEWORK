MainCtrl.$inject = ['$scope', '$http', '$interval'];

function MainCtrl($scope, $http, $interval) {

  const tubes = (res => $scope.data = res);

  $http
    .get('https://api.tfl.gov.uk/line/mode/tube/status')
  //not sure if need the key??
  //.get('https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true&app_id=4163f64d&app_key=0e2edbad77ee2963fafe38eaeddb1c52%09
    .then(res => tubes(res.data));

  $interval(function() {
    window.location.reload();
    console.log('refreshed');
  }, 300000);

}

export default MainCtrl;
