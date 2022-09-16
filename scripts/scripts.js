const firstCard =document.querySelector('.first-card');

firstCard.addEventListener('click',flipCard);

function flipCard() {
    firstCard.classList.toggle('flipped');
}