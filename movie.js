/**
 * Author: Trevor M. Birdsall
 * Version: 1.0.0
 * Purpose: to loop a movie list
 */

"use strict";
const PROMPT = require("readline-sync");

const MIN_STARS = 0, MAX_STARS = 5;
const MAX_TRIES = 3;
let movieTitle;
let stars = [];
let average;

/**
 *@method
 *@desc
 *@returns {null}
 */
function main() {
    setMovieTitle();
    setMovieRate();
    setAverage();
    printAverage();
}

main();


/**
 * @method
 * @desc movieTitle mutator
 * @returns
 */
function setMovieTitle(){
    movieTitle = PROMPT.question('\nWhat is the name of the movie?');
    }


function setMovieRate() {
    let errors = 0;
    while (errors < MAX_TRIES) {
        let rating = parseInt(PROMPT.question("How many stars? (0-5): "));
        try {
            if(isNaN(rating)) {
                throw "This is not a valid input, please try again!";
            }
            if (rating > MAX_STARS) {
                throw "This is not a valid input, please try again!";

            }
            if (rating < MIN_STARS) {
                throw "This is not a valid input, please try again!";
            }
            stars.push(rating);
        }
        catch(error) {
            console.log(error);
            errors++;
        }

    }
}

function setAverage() {
    let total = 0;
    for (let star of stars) {
        total += star;
    }
    average = total / stars.length;
}

function printAverage() {
    console.clear();
    console.log('\nAverage Stars = ' + average + ".")
}