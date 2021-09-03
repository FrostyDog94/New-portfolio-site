const hamButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');



function toggleButton() {
    navList.classList.toggle('show');

}

hamButton.addEventListener('click', toggleButton);