#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log("Playing a game of Roshambo against the computer.")

if (argv.move === 'rock') {

    console.log("You chose rock!")

} else if (argv.move === 'paper') {

    console.log("You chose paper!")

} else if (argv.move === 'scissors') {

    console.log("You chose scissors!")

} else {

    console.log("Your move is invalid, or no move provided.")
}

console.log("Computer logic not yet written.")
