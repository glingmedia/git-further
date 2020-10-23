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
    // div is a variable in the line below
    const div = document.getElementById('results')
    div.append(number + ', ');
}

// make small functions. easier!