import axios from "axios";
const key = process.env.REACT_APP_UNSPASH_KEY;

export const getAIImage = async (search) => {
  return new Promise(async (resolve, reject) => {
    
    let searchTerm = search.isPhoto
      ? "Photo of " + search.type
      : search.type;
   
      const result = await axios.post('https://tidy-drinks-shout-34-124-200-235.loca.lt/text2img',{
        prompt:searchTerm
      }); 
      const aiimg=result.data
     
     resolve(aiimg);
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
