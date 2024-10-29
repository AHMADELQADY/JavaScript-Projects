
/*const score = {
wins: 0,
losses: 0,
ties: 0
};
*/
  // || score = { wins: 0,losses: 0,ties: 0} to make it shorter
let score = JSON.parse(localStorage.getItem('score'));
  // or use (!score) as shortcut downhere
if (score === null){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}

scoreVisible();


function scoreVisible(){

  document.querySelector('.js-score')
  .innerHTML = ` Wins:  ${score.wins} , Losses:   ${score.losses}, Ties:  ${score.ties}`;
} 


function playGame(playerMove){
  const computerChoice = pickComputerMove();
  let result = '';

  if (playerMove == 'Scissors'){
    
    if (computerChoice == 'Rock') {
      result = 'You lose'
    }else if (computerChoice == 'Paper'){
      result = 'You Win'
    }else if (computerChoice == 'Scissors') {
      result = 'Tie'
    }

  } 


  if (playerMove == 'Paper'){
    
    if (computerChoice == 'Rock') {
      result = 'You Win'
    }else if (computerChoice == 'Paper'){
      result = 'Tie'
    }else if (computerChoice == 'Scissors') {
      result = 'You lose'
    }

  } 

  if (playerMove == 'Rock'){
    
    if (computerChoice == 'Rock') {
      result = 'Tie'
    }else if (computerChoice == 'Paper'){
      result = 'You lose'
    }else if (computerChoice == 'Scissors') {
      result = 'You Win'
    }

  } 

  if (result === 'You Win'){

    score.wins += 1;

  }else if (result === 'You lose'){

    score.losses += 1;
  }else if (result === 'Tie'){

    score.ties += 1;
  }

  localStorage.setItem('score' , JSON.stringify(score));

  scoreVisible();


  document.querySelector('.js-result').innerHTML = result;


  document.querySelector('.js-moves').innerHTML = `You
  <img class="move-icon" src="images/${(playerMove.toLowerCase())}-emoji.png" alt="rock-emoji"> 
  <img class="move-icon" src="images/${(computerChoice.toLowerCase())}-emoji.png" alt="scissors-emoji">
  Computer`;



  /* alert('You picked ' + playerMove + '. Computer picked ' + computerChoice + ' ' + result + '\n' +' Wins:  ' + score.wins + ', Losses:   ' + score.losses + ', Ties:  ' + score.ties )
  */
}



function pickComputerMove(){
  const randomNumber = Math.random();
  let computerChoice = '';

  if( randomNumber >= 0 && randomNumber < 1/3 ) 
  {

    computerChoice = 'Rock';
  }

  else if (randomNumber >= 1/3 && randomNumber < 2/3)
  {
    computerChoice = 'Paper';
  }  


  else if (randomNumber >= 2/3 && randomNumber < 1)
  {
    computerChoice = 'Scissors';
  }   
  
  console.log(computerChoice);
  return computerChoice;

}


