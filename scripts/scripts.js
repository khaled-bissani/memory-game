// Declare all the cards
const cards = document.querySelectorAll('.card');

function flipCard () {
    this.classList.toggle('flipped');
}

// Declare the event of the cards
cards.forEach(card => card.addEventListener('click',flipCard));
