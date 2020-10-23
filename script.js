// Start function when button is clicked
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber)
}

// Helper function 1
function getRandomNumber() {
    const randomNumber = Math.random() * 100
    return Math.round(randomNumber);
}

// Helper function 2
function addNumberToPage(number) {
    console.log(number);
}