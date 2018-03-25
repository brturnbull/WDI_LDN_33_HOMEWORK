document.addEventListener("DOMContentLoaded", function(event) {
  const rock = document.getElementsByClassName('rock')[0];
  const paper = document.getElementsByClassName('paper')[0];
  const scissors = document.getElementsByClassName('scissors')[0];
  const reset = document.getElementsByClassName('reset')[0];
  const player1 = document.getElementsByClassName('player1')[0];
  const player2 = document.getElementsByClassName('player2')[0];
  const winner = document.getElementsByClassName('result')[0];

  var player1result = 0;
  var player2result = 0;

  var player2result = Math.random();
  if (player2 < 0.34) {
    player2result = "Rock";
  } else if(player2result <= 0.67) {
    player2result = "Paper";
  } else {
    player2result = "Scissors";
  }

  var compare = function(player1result,player2result) {
    if (player1result === 'rock') {
      if (player2result === 'scissors') {
        winner.innerHTML = 'Player 1 wins!';
      } else {
        winner.innerHTML = 'Player 2 wins!';
      }}
    else if (player1result === 'paper') {
      if (player2result === 'scissors') {
        winner.innerHTML = 'Player 2 wns!';
      } else {
        winner.innerHTML = 'Player 1 wins!';
      }}
    else if (player1result === 'scissors') {
        if (player2result === 'rock') {
        winner.innerHTML = 'Player 2 wins!';
      } else {
        winner.innerHTML = 'Player 1 wins!';
      }
    } else if (player1result === player2result) {
      winner.innerHTML ='the result is a tie!';
      }};

  rock.addEventListener('click', function(e) {
    player1.innerHTML = 'Rock';
    player2.innerHTML = player2result;
    player1result = 'rock'
    compare(player1result,player2result);
  });
  paper.addEventListener('click', function(e) {
    player1.innerHTML = 'Paper';
    player2.innerHTML = player2result;
    player1result = 'paper';
    compare(player1result,player2result);
  });
  scissors.addEventListener('click', function(e) {
    player1.innerHTML = 'Scissors';
    player2.innerHTML = player2result;
    player1result = 'scissors';
    compare(player1result,player2result);
  });
  reset.addEventListener('click', function(e) {
    location.reload();
  });
});
