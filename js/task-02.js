const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
  
const ulRef = document.querySelector('#ingredients');

const vagetablesRef = ingredients.map(item => {
    const vagetabelsItem = document.createElement('li');
    vagetabelsItem.textContent = item;
    return vagetabelsItem;
  });

ulRef.append(...vagetablesRef);
