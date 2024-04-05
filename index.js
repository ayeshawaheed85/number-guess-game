import inquirer from 'inquirer';
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function guessNumber() {
    inquirer.prompt({
        type: 'input',
        name: 'guess',
        message: 'Guess the number (between 1 and 100):',
        validate: (input) => {
            const guess = parseInt(input);
            if (isNaN(guess) || guess < 1 || guess > 100) {
                return 'Please enter a valid number between 1 and 100.';
            }
            return true;
        }
    }).then((answer) => {
        const guess = parseInt(answer.guess);
        attempts++;
        if (guess === secretNumber) {
            console.log(`Congratulations! You've guessed the number in ${attempts} attempts.`);
        }
        else if (guess < secretNumber) {
            console.log('Too low! Try again.');
            guessNumber();
        }
        else {
            console.log('Too high! Try again.');
            guessNumber();
        }
    });
}
console.log('Welcome to the Number Guessing Game!');
console.log('I have selected a random number between 1 and 100.');
console.log('Try to guess it!');
guessNumber();
