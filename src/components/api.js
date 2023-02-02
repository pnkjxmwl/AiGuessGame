import axios from "axios";
const key = process.env.REACT_APP_UNSPASH_KEY;


export const getAIImage = async (search) => {
  return new Promise(async (resolve, reject) => {
    console.log("search", search);
    let searchTerm = search.isPhoto
      ? "Photo of " + search.detail
      : search.detail;
    console.log("searchTerm", searchTerm);

    const url = `https://lexica.art/api/v1/search?q=${searchTerm}`;

    const response = await fetch(url);
    const data = await response.json();

    const images = data.images;
    // filter nsfw images
    const filteredImages = images.filter((img) => !img.nsfw);
    console.log("ai images", filteredImages);

    resolve(filteredImages);
  });
};

export const getNormalImages = async (search) => {

  const url = `https://api.unsplash.com/search/photos?query=${search.type}&client_id=${key}&content_filter=high&per_page=30`;

  return new Promise(async (resolve, reject) => {
    const response = await fetch(url);
    const data = await response.json();

    const images = data.results;
    console.log("normal images", images);
    resolve(images);
  });
};
