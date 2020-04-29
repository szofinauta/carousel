const images = [
  {
    title: 'Trees from above',
    source: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fdcdde66672659.5b92e224c0fc6.jpg',
    description: 'bird-eye view of a church and pine trees at night'
  },

  {
    title: 'Vigilant owl',
    source: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1665651777425.58f94d2b5b72c.jpg',
    description: 'dark blue night scenery with a red-eyed owl staring at us'
  },

  {
    title: 'Foggy house',
    source: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4d4cbf51777425.58f94d2b5cd1e.jpg',
    description: 'a house in fog with purple and blue hues at night'
  },

  {
    title: 'Neon Seagulls',
    source: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa4a2a63573187.5b7e0f3ddce5e.jpg',
    description: 'a street after rain reflecting neon pink artificial light with flying seagulls'
  }
];

let photo = document.querySelector('#photo');
let photoTitle = document.querySelector('#photo-title');
let photoDescription = document.querySelector('#photo-description');
let leftButton = document.querySelector('#left-button');
let rightButton = document.querySelector('#right-button');
let thumbnails = document.querySelector('#thumbnails');
let currentIndex = 0;

function loadImage() {
  photo.src = images[currentIndex].source;
  photoTitle.innerText = images[currentIndex].title;
  photoDescription.innerText = images[currentIndex].description;
}

loadImage();

rightButton.addEventListener('click', function() {
  currentIndex += 1;
  currentIndex >= images.length ? (currentIndex = 0) : currentIndex;
  photo.src = images[currentIndex].source;
  photoTitle.innerText = images[currentIndex].title;
  photoDescription.innerText = images[currentIndex].description;
});

leftButton.addEventListener('click', function() {
  currentIndex -= 1;
  currentIndex < 0 ? (currentIndex = images.length - 1) : currentIndex;
  photo.src = images[currentIndex].source;
  photoTitle.innerText = images[currentIndex].title;
  photoDescription.innerText = images[currentIndex].description;
});

function generateThumbnails() {
  let thumbnailFigure = document.createElement('figure');
  thumbnailFigure.classList.add('thumbnailFigure');

  for (const image of images) {
    let thumbnailImage = document.createElement('img');
    let thumbnailImageWrapper = document.createElement('div');
    thumbnailImage.classList.add('thumbnailImage');
    thumbnailImageWrapper.classList.add('thumbnailImageWrapper');
    thumbnailImage.src = image.source;
    thumbnailImage.alt = image.description;

    let thumbnailCaption = document.createElement('figcaption');
    thumbnailCaption.classList.add('thumbnailCaption');

    let thumbnailTitle = document.createElement('h1');
    thumbnailTitle.innerText = image.title;
    thumbnailCaption.appendChild(thumbnailTitle);

    thumbnailImageWrapper.appendChild(thumbnailCaption);
    thumbnailImageWrapper.appendChild(thumbnailImage);
    thumbnailFigure.appendChild(thumbnailImageWrapper);

    thumbnailImage.addEventListener('mouseover', function() {
      thumbnailCaption.style.opacity = 0.9;
      thumbnailImage.style.cursor = 'pointer';
    });

    thumbnailImage.addEventListener('mouseout', function() {
      thumbnailCaption.style.opacity = 0;
    });
  }

  thumbnails.appendChild(thumbnailFigure);
}

generateThumbnails();
