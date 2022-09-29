const request = require("request");
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;


request(url, (error, response, body) => {

  if (error) {
    return console.log(error);
  }

  const data = JSON.parse(body);
  if (!data[0]) {
    return console.log("Breed not found!");
  }

  console.log(data[0].description);
  console.log(typeof data);
});

// https://api.thecatapi.com/v1/breeds/search
// JSON prettier (JSON format extension in chrome)