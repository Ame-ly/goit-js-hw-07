const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elementsRef = document.querySelector('#ingredients');

const createProduct = ingredient => {
  
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
};

const elements = ingredients.map(createProduct);

const title = document.createElement('h2');
title.textContent = 'Ингридиенты';
elementsRef.before(title);
elementsRef.append(...elements);
console.log(elementsRef);



// const searchNewRef = document.querySelector('#ingredients');
// ingredients.forEach(ingredientsItems);

// function ingredientsItems(el) {

//   document.createElement('li').textContent = el;
//   searchNewRef.appendChild(addList);
// }