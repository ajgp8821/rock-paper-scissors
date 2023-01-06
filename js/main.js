let userScore = 0;
let cpuScore = 0;
let closeBtn;
const userScoreSpan = document.getElementById("user-score");
const cpuScoreSpan = document.getElementById("cpu-score");
const restart = document.getElementById("restart");
const result = document.getElementById("result");
const modal = document.querySelector(".modal");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


function getCpuChoise() {
  const choises = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choises[randomNum];
}

function win(userChoise, cpuChoise) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  cpuScoreSpan.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">You win!</h1> <p>Computer choose <strong>${cpuChoise}</strong></p>`;
  modal.style.display = 'block';
}

function lose(userChoise, cpuChoise) {
  cpuScore++;
  userScoreSpan.innerHTML = userScore;
  cpuScoreSpan.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">You lost!</h1> <p>Computer choose <strong>${cpuChoise}</strong></p>`;
  modal.style.display = 'block';
}

function draw(userChoise, cpuChoise) {
  userScoreSpan.innerHTML = userScore;
  cpuScoreSpan.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">It's draw</h1> <p>You both choose <strong>${cpuChoise}</strong></p>`;
  modal.style.display = 'block';
}

function play(userChoise) {
  const cpuChoise = getCpuChoise();
  switch (userChoise + cpuChoise) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoise, cpuChoise);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoise, cpuChoise);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoise, cpuChoise);
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', function() {
    play('rock');
  });
  
  paperDiv.addEventListener('click', function() {
    play('paper');
  });
  
  scissorsDiv.addEventListener('click', function() {
    play('scissors');
  });
}

function clearModal(e) {
  closeBtn = document.querySelector('.close');

  if (e.target == modal) {
    modal.style.display = 'none';
  }
  else if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
}

function restartGame() {
  userScore = 0;
  cpuScore = 0;
  userScoreSpan.innerHTML = userScore;
  cpuScoreSpan.innerHTML = cpuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main();
