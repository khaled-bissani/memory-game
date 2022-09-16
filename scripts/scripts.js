// Declare all the cards
const firstCard =document.querySelector('.first-card');
const secondCard =document.querySelector('.second-card');
const thirdCard =document.querySelector('.third-card');
const fourthCard =document.querySelector('.fourth-card');
const fifthCard =document.querySelector('.fifth-card');
const sixthCard =document.querySelector('.sixth-card');
// Declare the flip functions
const flipCard1 = () => firstCard.classList.toggle('flipped');
const flipCard2 = () => secondCard.classList.toggle('flipped');
const flipCard3 = () => thirdCard.classList.toggle('flipped');
const flipCard4 = () => fourthCard.classList.toggle('flipped');
const flipCard5 = () => fifthCard.classList.toggle('flipped');
const flipCard6 = () => sixthCard.classList.toggle('flipped');
// Declare all events of the cards
firstCard.addEventListener('click',flipCard1);
secondCard.addEventListener('click',flipCard2);
thirdCard.addEventListener('click',flipCard3);
fourthCard.addEventListener('click',flipCard4);
fifthCard.addEventListener('click',flipCard5);
sixthCard.addEventListener('click',flipCard6);
