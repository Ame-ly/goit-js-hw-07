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

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('gallery-js');

const markupGallery = images
  .map(
    img =>
      `<li class="gallery-card-js">
  <img src="${img.url}"
   alt="${img.alt}"
   class="gallery-img-js">
  </li>`,
  )
  .join('');

galleryRef.insertAdjacentHTML('beforeend', markupGallery);

//вариант 2
// const createGallery = ({ url, alt }) => {
//   const imgTag = document.createElement('img');
//   imgTag.src = url;
//   imgTag.alt = alt;
//   imgTag.classList.add('gallery-img-js');

//   const liTag = document.createElement('li');
//   liTag.appendChild(imgTag);
//   liTag.classList.add('gallery-card-js');
//   return liTag;

// };

// const galleryTemplate = images.map(createGallery);
// galleryRef.append(...galleryTemplate);
// console.log(galleryRef);
