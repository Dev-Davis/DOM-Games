// $('h3').click(function() {
//     $(this).text("I was changed!")
// })

// key press
$('input').eq(0).keypress(function (e) {
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue')
    }
})

// on() method
// $('h3').on('mouseenter', function() {
//     $(this).toggleClass('turnBlue');
// })

//events and animations
$('input').eq(1).on('click', function () {
    $('table').slideToggle(3000);
})


//---------- Connect Four Game 

const player1 = prompt("Player One: Enter Your Name. Your color is Red.");
const player1Color = 'rgb(86, 151, 255)';

const player2 = prompt("Player One: Enter Your Name. Your color is Red.");
const player2Color = 'rgb(237, 45, 73)';

let game_on = true;
let table = $('table tr');

function repotWin(rowNum, colNum) {
    console.log("You won starting at this row, col");
    console.log(rowNum);
    console.log(colNum);
}

//---------- report back color
function returnColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// finds the next empty gray slot
function checkBottom(colIndex) {
    let colorReport = returnColor(5, colIndex);
    for (let row = 5; row > -1; row--) {
        colorReport = returnColor(row, colIndex);
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}

function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}

// Check for horizontal wins
function horizontalWinCheck() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2, col+2), returnColor(row+3, col+3), returnColor(row+4,col+4))) {
                console.log('horiz');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}

// check for vertical wins
function verticalWinCheck() {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2, col+2), returnColor(row+3, col+3), returnColor(row+4,col+4))) {
                console.log('vertical');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }

    // diagonal win check
    function diagonalWinCheck() {
        for (let col = 0; col < 5; col++) {
            for (let row = 0; row < 7; row++) {
                if (colorMatchCheck(returnColor(row, col), returnColor(row+1, col+1), returnColor(row+2, col+2), returnColor(row+3, col+3), returnColor(row+4, col+4))) {
                    console.log('diag');
                    reportWin(row, col);
                    return true;
                } else if (colorMatchCheck(returnColor(row, col), returnColor(row-1, col+1), returnColor(row-2, col+2), returnColor(row-3, col+3), returnColor(row-4, col+4))) {
                    console.log('diag');
                    reportWin(row, col);
                    return true;
                } else {
                    continue;
                }
            }
        }
    }
}






