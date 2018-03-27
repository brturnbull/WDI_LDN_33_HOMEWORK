window.addEventListener('DOMContentLoaded', () => {

// FIRST CLOCK

  function getTime() {
    const watchScreen = document.getElementsByClassName('screen')[0];
  }
    function currentTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getHours();
      const seconds = now.getHours();

      return `${hours}:${minutes}:${seconds}`;
    }

  function startClock() {
    watch.innerHTML = currentTime();
    setInterval(() => {
      watch.innerHTML = currentTime();
    }, 1000);
  }

  startClock();


  //   const currentDate = new Date();
  //   const hours = currentDate.getHours();
  //   const minutes = currentDate.getMinutes();
  //   const seconds = currentDate.getSeconds();
  //   var now = hours + ':' + minutes + ':' + seconds;
  //   watchScreen.innerHTML = now;
  // }
  //
  // function liveTime() {
  //   setInterval(getTime, 1000);
  // }
  //
  // liveTime();

  // SECOND CLOCK



  const timerScreen = document.getElementsByClassName('screen')[1];
  var startStopButton = document.getElementById('startStop');

  function getTimer(){

    startStopButton.addEventListener('click', function()  {
      var counter = 10;
      var interval = setInterval(function(){
        counter--;
        timerScreen.innerHTML = counter;
        if (counter === 0) {
          clearInterval(interval);
        }
      }, 1000);
    });
  }
  getTimer();
});
