#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log("Playing a game of Roshambo against the computer.")

class userInput {

    constructor(input, computer) {

        this.input = input
        this.computer = computer
    }

    logInput() {

        if (this.input === 'rock') {

            console.log("You chose rock!")

        } else if (this.input === 'paper') {

            console.log("You chose paper!")

        } else if (this.input === 'scissors') {

            console.log("You chose scissors!")

        } else {

            console.log("Your move is invalid, or no move provided.")

            throw 'Unfair game!'
        }

        return this.computer.getRandomMove()
    }
}

class computerLogic {

    getRandomMove() {

        let rand = Math.floor(Math.random() * 3)

        if (rand === 0){

            console.log('The computer chose rock!')

            return 'rock'

        } else if (rand === 1){

            console.log('The computer chose paper!')

            return 'paper'

        } else if (rand === 2){

            console.log('The computer chose scissors!')

            return 'scissors'
        }
    }
}

class gameLogic {

    constructor(user, computer) {

        this.user = user
        this.computer = computer
    }

    determineWinner() {

        if (this.user === 'rock') {

            if (this.computer === 'paper') {

                console.log('Computer wins!')


            } else if (this.computer === 'scissors') {

                console.log('Player wins!')

            } else {

                console.log('Tie game!')
            }

        } else if (this.user === 'paper') {

            if (this.computer === 'scissors') {

                console.log('Computer wins!')

            } else if (this.computer === 'rock') {

                console.log('Player wins!')

            } else {

                console.log('Tie game!')

            }

        } else if (this.user === 'scissors') {

            if (this.computer === 'rock') {

                console.log('Computer wins!')

            } else if (this.computer === 'paper') {

                console.log('Player wins!')

            } else {

                console.log('Tie game!')
            }
        }
    }
}

let computer1 = new computerLogic()
let user1 = new userInput(argv.move, computer1)
let gameController = new gameLogic(argv.move, user1.logInput())

gameController.determineWinner()
