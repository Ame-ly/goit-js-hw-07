[...document.querySelectorAll('ul#categories')].map(category => {
  const numberOfCategories = category.children.length;
  console.log(`В списке ${numberOfCategories} категории.`);

  const titleRef = category.querySelector('h2').textContent;
  const numberEl = category.querySelectorAll('li').length;
  console.log(`Категория: ${titleRef}. Количество элементов: ${numberEl}`);
});
