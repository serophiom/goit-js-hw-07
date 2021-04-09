const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
  
const potatoEl = document.createElement('li');
potatoEl.textContent = ingredients[0];
const mushroomEl = document.createElement('li');
mushroomEl.textContent = ingredients[1];
const garlicEl = document.createElement('li');
garlicEl.textContent = ingredients[2];
const tomatoEl = document.createElement('li');
tomatoEl.textContent = ingredients[3];
const greensEl = document.createElement('li');
greensEl.textContent = ingredients[4];
const condimentsEl = document.createElement('li');
condimentsEl.textContent = ingredients[5];

const ulRef = document.querySelector('ul');
ulRef.append(potatoEl, mushroomEl, garlicEl, tomatoEl, greensEl, condimentsEl);
