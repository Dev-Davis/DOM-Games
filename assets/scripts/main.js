// Restart game button
const restart = document.querySelector("#buttn");
// Grab all squares
const squares = document.querySelectorAll('td');
// Clear all squares
function clearBoard() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);
// Check square marker

// For loop to add event listeners to all squares