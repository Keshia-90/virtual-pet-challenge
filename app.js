const inquirer = require("inquirer");
const { Cat } = require("./cat");
const { Hamster } = require("./hamster");

//ascii art for title
console.log(`
    ──────▄▀▄─────▄▀▄
    ─────▄█░░▀▀▀▀▀░░█▄
    ─▄▄──█░░░░░░░░░░░█──▄▄
    █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
    ┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋┏┓╋┏━━━┓╋╋┏┓
    ┃┗┓┏┛┃┏┛┗┓╋╋╋╋╋┃┃╋┃┏━┓┃╋┏┛┗┓
    ┗┓┃┃┏╋┻┓┏╋┓┏┳━━┫┃╋┃┗━┛┣━┻┓┏┛
    ╋┃┗┛┣┫┏┫┃┃┃┃┃┏┓┃┃╋┃┏━━┫┃━┫┃
    ╋┗┓┏┫┃┃┃┗┫┗┛┃┏┓┃┗┓┃┃╋╋┃┃━┫┗┓
    ╋╋┗┛┗┻┛┗━┻━━┻┛┗┻━┛┗┛╋╋┗━━┻━┛
`);

console.log("Welcome to Virtual Pet...All The Fun Of Having A Pet Without Having A Pet");

try{
    const start = async () => {
    const { typeOfPet } = await inquirer.prompt({
        type: "list",
        name: "typeOfPet",
        message: "Which pet would you like to adopt?",
        choices: [
            {
                key: "a",
                name: "Cat",
                value: "cat",
            },
            {
                key: "b",
                name: "Hamster",
                value: "hamster",
            },
        ],
    });

    const { petName } = await inquirer.prompt({
        type: "input",
        name: "petName",
        message: "What would you like to call your pet?",
    });

    if (typeOfPet === "cat") myPet = new Cat(petName);
    else if (typeOfPet === "hamster") myPet = new Hamster(petName);
    //tells the user what they have named their choice of pet
console.log(`You have named your ${typeOfPet}, ${petName}`);
    userChoice();
}

async function userChoice() {
const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "How would you like to interact with your pet?",
    choices: [
        {
        key: "a",
        name: "Feed your pet",
        value: "feed",
        },
        {
        key: "b",
        name: "Give your pet some water",
        value: "drink",
        },
        {
        key: "c",
        name: "Play with your pet",
        value: "play",
        },
        {
        key: "d",
        name: "Put them to bed",
        value: "put to them bed",
        },
        {
        key: "e",
        name: "Check your pet's stats",
        value: "stats",
        },
        {
        key: "f",
        name: "Bath your pet",
        value: "bath your pet",
        },
        {
        key: "g",
        name: "Restart game",
        value: "restart",
        },
    ],
});

// this was the bit we was stuck on with our original pet, added a restart choice as cyberpets have a reset button on the back of them
if (choice === "feed") await myPet.eats();
if (choice === "drink") await myPet.drinks();
if (choice === "play") await myPet.plays();
if (choice === "put them to bed") await myPet.sleep();
if (choice === "bath your pet") await myPet.bath();
if (choice === "restart") {
    const restartChoice = await confirmRestart();
    if (restartChoice) return;
}

myPet.stats();
userChoice();
}

//if user selects restart te message an names assiged to each key will show
async function confirmRestart() {
    const { restartChoice } = await inquirer.prompt({
        type: "list",
        name: "restartChoice",
        message: "Are you sure you want to restart?",
        choices: [
            {
            key: "a",
            name: "100% want to restart.",
            value: "yes",
            },
            {
            key: "b",
            name: "No, I'll continue this game.",
            value: "no",
            },
        ],
    });

    if (restartChoice === "yes") return true;
    else return false;
}
start();
}
catch (error) {
    console.log("OOOOPS", error);
}





