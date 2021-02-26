const categoryRef = document.querySelector('ul#categories');

console.log(`В списке ${categoryRef.children.length} категории.`);

categoryRef.querySelectorAll('.item').forEach(el => {
  
  console.log(`• Категория:${el.querySelector('h2').textContent}
• Количество элементов:${el.querySelector('ul').children.length}`);
});
