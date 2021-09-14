const hamButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');



function toggleButton() {
    navList.classList.toggle('show');

}

hamButton.addEventListener('click', toggleButton);

window.addEventListener('scroll', reveal);

window.addEventListener('load', start);

window.addEventListener('load', startReverse);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}

function start() {
    var starts = document.querySelectorAll('.start');
    for (var i = 0; i < starts.length; i++) {
        starts[i].classList.add('active')
    }
}
function startReverse() {
    var starts = document.querySelectorAll('.startReverse');
    for (var i = 0; i < starts.length; i++) {
        starts[i].classList.add('active')
    }
}