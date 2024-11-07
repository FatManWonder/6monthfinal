const wordsToFind = ["STINK", "SQUISH", "LEMONADE", "PIZZA", "PASTA", "LOVE", "HOME"];
let foundWords = [];
let selectedLetters = [];

function generateBoard() {
    const board = document.getElementById("word-search-board");
    const gridSize = 10;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Clear previous board
    board.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++) {
        const span = document.createElement("span");
        span.textContent = letters.charAt(Math.floor(Math.random() * letters.length));
        span.addEventListener("click", () => handleClick(span));
        board.appendChild(span);
    }
}

function handleClick(span) {
    const letter = span.textContent;

    // Ensure that we're only adding unique words and avoid duplicating
    if (!selectedLetters.includes(letter)) {
        selectedLetters.push(letter);
    }

    // Check each word in the list
    wordsToFind.forEach(word => {
        if (word.includes(letter) && !foundWords.includes(word) && isWordComplete(word)) {
            foundWords.push(word);
            document.getElementById("found-words").innerHTML = foundWords.map(word => `<li>${word}</li>`).join("");
        }
    });
}

function isWordComplete(word) {
    return word.split('').every(letter => selectedLetters.includes(letter));
}

generateBoard();
