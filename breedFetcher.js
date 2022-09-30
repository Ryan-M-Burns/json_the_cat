const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {

    if (error) {
      callback('request could not be processed at this time!', null);
      return;
    }

    const data = JSON.parse(body);

    if (!data[0]) {
      callback('Breed not found!', null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
// https://api.thecatapi.com/v1/breeds/search
// JSON prettier (JSON format extension in chrome)