import inquirer from 'inquirer';
let ans = await inquirer.prompt([{
        type: "input",
        name: "words",
        message: "Please, enter your sentence: "
    }]);
let word_count = ans.words.trim().split(" ").length;
console.log(`Your sentence has ${word_count} words.`);
