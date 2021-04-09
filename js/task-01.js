const itemRef = document.querySelectorAll('.item');
console.log(`В списке: ${itemRef.length} категории`);

itemRef.forEach(item => {    
    const itemTitleRef = item.querySelector('h2');
    const itemLiRef = item.querySelectorAll('li');
    console.log(`Категория: ${itemTitleRef.textContent}`);
    console.log(`Количество элементов: ${itemLiRef.length}`);
});