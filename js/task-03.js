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
const liList = document.insertAdjacentHTML
// images.forEach(image => {
//   const url = image.url;
//   imageListRef.insertAdjacentHTML('beforeend', '<li><img src=""></li>');
//   console.log(url);
//   imageListRef.src = url;
// });

// imageListRef.insertAdjacentHTML('afterbegin', '<li><img></li>');
// imageListRef.insertAdjacentHTML('beforeend', '<li><img></li>');
// imageListRef.insertAdjacentHTML('beforeend', '<li><img></li>');

const url1 = images[0].url;
const liEl = document.createElement('li');
const imgEl = document.createElement('img');

imgEl.src = url1;
// imageListRef.append(liEl, imgEl);

liEl.appendChild(imgEl);
console.log(url1);

// imageListRef.appendChild(liEl);

imageListRef.insertAdjacentHTML('beforeend', liEl);

console.log(imageListRef);
console.log(images[0].url);
console.log(images[0].alt);