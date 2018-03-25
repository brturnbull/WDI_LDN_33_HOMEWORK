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
    player2result = 'rock';
  } else if(player2result <= 0.67) {
    player2result = 'paper';
  } else {
    player2result = 'scissors';
  }

  var compare = function(player1result,player2result) {
    if (player2result === player1result) {winner.innerHTML ='The result is a tie!';}
    else if (player1result === 'rock') {
      if (player2result === 'scissors') {
        winner.innerHTML = 'Player 1 wins!';
      } else {
        winner.innerHTML = 'Player 2 wins!';
      }
    }
    else if (player1result === 'paper') {
      if (player2result === 'scissors') {
        winner.innerHTML = 'Player 2 wins!';
      } else {
        winner.innerHTML = 'Player 1 wins!';
      }
    }
    else if (player1result === 'scissors') {
        if (player2result === 'rock') {
        winner.innerHTML = 'Player 2 wins!';
      } else {
        winner.innerHTML = 'Player 1 wins!';
      }
    }
    }

  rock.addEventListener('click', function(e) {
    player1.innerHTML = 'rock';
    player2.innerHTML = player2result;
    player1result = 'rock'
    compare(player1result,player2result);
  });
  paper.addEventListener('click', function(e) {
    player1.innerHTML = 'paper';
    player2.innerHTML = player2result;
    player1result = 'paper';
    compare(player1result,player2result);
  });
  scissors.addEventListener('click', function(e) {
    player1.innerHTML = 'scissors';
    player2.innerHTML = player2result;
    player1result = 'scissors';
    compare(player1result,player2result);
  });
  reset.addEventListener('click', function(e) {
    location.reload();
  });
});
