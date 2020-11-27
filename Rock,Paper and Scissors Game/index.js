const game= () =>{
    let pScore = 0;
    let cScore = 0;
    
//start the game

    const startGame= ()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");



        playBtn.addEventListener("click", () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            });
    };
    //play match
    const playMatch = ()=>{
        const option = document.querySelectorAll(".option button");
        const playerHand =document.querySelector(".player-hand");
        const computerHand =document.querySelector(".computer-hand");
   
    //computer options
 const computerOption = ["rock","paper","scissors"];
 option.forEach(option=>{
option.addEventListener('click', function() {
    //computer choice
    const computerNumbers = Math.floor(Math.random() *3);  
    const computerChoise = computerOption[computerNumbers];
    compareHands(this.textContent, computerChoise);
   //update images
   playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoise}.png`;

    
});
 }); 
};
const updateScore=()=>{
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent=  pScore;
    computerScore.textContent= cScore;
};
 const compareHands = (playerChoice , computerChoise)=>{
     const winner = document.querySelector('.winner');
     //checking for a tie
     if(playerChoice === computerChoise){
         winner.textContent ="It is a tie";
        return;
         };
         if(playerChoice === 'rock'){
             if(computerChoise === 'scissors'){
                 winner.textContent = 'Player Wins';
                 pScore++;
                 updateScore();
                 return;
             }
             else{
                 winner.textContent ='Computer Wins';
                 cScore++;
                 updateScore();
                 return;
             }
            };
             if(playerChoice ==='paper'){
                if(computerChoise === 'scissors'){
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }
                else {
                    winner.textContent ='Player Wins';
                    pScore++;
                    updateScore();
                    return;
                }
            };
                if(playerChoice ==='scissors'){
                    if(computerChoise === 'rock'){
                        winner.textContent = 'Player Wins';
                        pScore++;
                        updateScore();
                        return;
                        
                    }
                    else{
                        winner.textContent ='Computer Wins';
                        cScore++;
                        updateScore();
                        return;
                    }
                };

        };

//function is called
    startGame();
    playMatch();
 
};

//start the game function call
game();