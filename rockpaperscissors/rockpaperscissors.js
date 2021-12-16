let focusedElement;

const buttons = document.querySelectorAll('button[type=button]');
const submitButton = document.querySelector('button[type=submit]');

buttons.forEach(button => {
    button.addEventListener('blur', (e) => setFocusId(e));
});

submitButton.addEventListener('click', getPlayerInput(focusedElement));


function computerPlay() {

    choices = [
        'rock',
        'paper',
        'scissors'
    ];

    return choices[Math.floor(Math.random() * 3)];
}

function playRound(computerInput, playerInput) {

    if (computerInput == playerInput) {
        return "Tie!";
    }

    else if (computerInput == 'rock') {
        if (playerInput == 'paper') {
            return "Player wins!";
        }
        else if (playerInput == 'scissors') {
            return "Player loses!";
        }
    }

    else if (computerInput == 'paper') {
        if (playerInput == 'scissors') {
            return "Player wins!";
        }
        else if (playerInput == 'rock') {
            return "Player loses!";
        }
    }
    
    else if (computerInput == 'scissors') {
        if (playerInput == 'rock') {
            return "Player wins!";
        }
        else if (playerInput == 'paper') {
            return "Player loses!";
        }
    }

}

function game() {

    score = 0;

    for (let rounds = 1; rounds < 6; rounds++) {

        console.log('This is round ' + rounds);

        playerInput = getPlayerInput();
        computerInput = computerPlay();

        console.log('Player: ' + playerInput + ' - Computer: ' + computerInput);

        outcome = playRound(computerInput, playerInput);
        console.log(outcome);

        score = score + keepScore(outcome);
        console.log('Score: ' + score);

    }
    
    console.log(getWinner(score) + ' Reload page to start a new game.');

}

function getPlayerInput(focusedElement) {

    if (focusedElement != null) {
        let input = focusedElement.trim().toLowerCase();

        console.log(input);
        
        return input;
    }

}

function keepScore(roundReturn) {

    if (roundReturn == 'Player wins!') {
        return 1;
    }

    else if (roundReturn == 'Player loses!') {
        return -1;
    }
    
    else return 0;

}

function getWinner(score) {
    if (score < 0) {
        return 'Oh no, you lost to the computer!';
    }
    else if (score > 0) {
        return 'You won, congrats!';
    } else return 'It\'s a tie!';
}

// game();

function setFocusId(element) {
    focusedElement = element.target.textContent;
}



