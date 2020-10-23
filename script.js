/**
 * Will generate random number and print it to the DOM.
 * Start function when button is clicked
 */
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber)
}

// Helper function 1

/**
 * Generates a random number and returns it.
 * @returns {number} the random number that was generated
 */
function getRandomNumber() {
    const randomNumber = Math.random() * 100
    return Math.round(randomNumber);
}

// Helper function 2
// Div is a variable in the example

/**
 * Places the passed in number in number into the DOM along with a comma and space.
 * @param {Number} number number to be put into DOM
 */
function addNumberToPage(number) {
    const div = document.getElementById('results')
    div.append(number + ', ');
}

    // temporary
    /** @type {HTMLInputElement} */

    //const input = document.getElementById('name')
    //input.value
    /** @typedef { { name: String, age: Number } } Person A simple person object 
    */

    // hold mouse over person to see example


// make small functions. easier!
// JSDOC to get intellisense and shows function examples.
// gives you additional guidance