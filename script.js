import initialCards from "../initialCards.js";

console.log(initialCards);

let index = Math.floor(Math.random() * initialCards.length);

console.log(index);

let cardsArray = initialCards.map((item) => item); 


const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');

function createCard(data)
{
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardLink = cardElement.querySelector('.card__image');
  cardLink.src = data.link;
  cards.append(cardElement); 
}

cardsArray.forEach(card => {
  createCard(card);
});


/////////




console.log(cardsArray);


//////////////////
