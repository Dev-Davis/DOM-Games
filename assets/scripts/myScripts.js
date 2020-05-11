// $('h3').click(function() {
//     $(this).text("I was changed!")
// })

// key press
$('input').eq(0).keypress(function(e) {
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue')
    }
})

// on() method
// $('h3').on('mouseenter', function() {
//     $(this).toggleClass('turnBlue');
// })

//events and animations
$('input').eq(1).on('click', function() {
    $('table').slideToggle(3000);
})

