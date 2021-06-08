// document.addEventListener('DOMContentLoaded', function () {
//     const paragraphs = Array.from(document.querySelectorAll('p'));
//     if (paragraphs.length > 1) {
//         paragraphs.forEach(p => {
//             p.onclick = function () {
//                 p.remove();
//             }
//         })
//     } else {
//         paragraphs.onclick = function () {

//         }
//     }
// });

$('.show-paragraph').click(function () {
    $('p').show();
})

$('.hide-paragraph').click(function () {
    $('p').hide();
})

$('.toggle-paragraph').click(function () {
    $('p').toggle();
});

