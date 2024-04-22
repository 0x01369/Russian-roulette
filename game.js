const readline = require('readline');
const { exec } = require('child_process');

function game() {
    const number = Math.floor(Math.random() * 6) + 1;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter a number (1-6): ", (answer) => {
        rl.close();

        if (parseInt(answer) === number) {
            console.log("Congratulations! You've won!");
        } else {
            console.log("You've lost! The computer is rebooting...");
            exec("reboot");
        }
    });
}

function main() {
    console.log("Welcome to the game of Russian roulette!");
    game();
}

if (require.main === module) {
    main();
}
