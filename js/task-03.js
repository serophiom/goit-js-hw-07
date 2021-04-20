const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageListRef = document.querySelector('#gallery');


// const imageRefs = images.map(image => {
//   const imgRef = document.createElement('img');
//   console.log(imgRef);
//   imgRef.src = image.url;
//   imgRef.alt = image.alt;
//   return imgRef;
// });



  const imageRefs = images.map(image => {
    const imgRef = imageListRef.insertAdjacentHTML('beforeend', '<li><img></li>');
    const imgRefs = document.querySelector('img');
    imgRefs.src = image.url;
    imgRefs.alt = image.alt;
    console.log(imgRef);
    
    return imgRef;
  });


console.log(imageRefs);
console.log(imageListRef);

// console.log(imageListRef);

// const vagetablesRef = ingredients.map(item => {
//     const vagetabelsItem = document.createElement('li');
//     vagetabelsItem.textContent = item;
//     return vagetabelsItem;
//   });


// imageListRef.insertAdjacentHTML('beforeend', '<li><img></li><li><img></li><li><img></li>');

// const imgRefs = imageListRef.querySelectorAll('img');

// console.log(imgRefs);
// images.forEach ( image => {
//   imgRefs.src = images.url;
// imgRefs[0].alt = images[0].alt;
// imgRefs[1].src = images[1].url;
// imgRefs[1].alt = images[1].alt;
// imgRefs[2].src = images[2].url;
// imgRefs[2].alt = images[2].alt;
// return 
// })


// const imageListRef = document.querySelector('#gallery');
// const liList = document.insertAdjacentHTML
// images.forEach(image => {

//   imageListRef.insertAdjacentHTML('beforeend', '<li><img src=""></li>');
//   const imgEl = imageListRef.querySelector('img');
//   imgEl.src = image.url;
//   // imageListRef.img = image.url;
//   // imageListRef.src = "image.url";

//   return imageListRef;
// });

// // imageListRef.insertAdjacentHTML('afterbegin', '<li><img></li>');
// // imageListRef.insertAdjacentHTML('beforeend', '<li><img></li>');
// // imageListRef.insertAdjacentHTML('beforeend', '<li><img></li>');

// const url1 = images[0].url;
// const liEl = document.createElement('li');
// const imgEl = document.createElement('img');

// imgEl.src = url1;
// // imageListRef.append(liEl, imgEl);

// liEl.appendChild(imgEl);
// console.log(url1);

// // imageListRef.appendChild(liEl);

// imageListRef.insertAdjacentHTML('beforeend', '<li><img class="image1"></li>');

// console.log(imageListRef);
// console.log(images[0].url);
// console.log(images[0].alt);