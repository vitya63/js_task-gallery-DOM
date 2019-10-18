'use strict';

const galleryList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');
const handler = function(e) {
  e.preventDefault();
  const imgSrc = e.target.src.replace('-thumb.jpeg', '.png');
  largeImg.src = imgSrc;
};
galleryList.addEventListener('click', handler);
