"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryWrapper = document.querySelector("#gallery");
galleryWrapper.classList.add("container");

const galleryItem = images.reduce((accum, elem) => {
  return (
    accum + `<img  class = "gallery-item" src='${elem.url}' alt='${elem.alt}'>`
  );
}, "");

galleryWrapper.insertAdjacentHTML(`afterbegin`, galleryItem);
