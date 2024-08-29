const fetch = require('node-fetch');
const express = require('express');
const ejs = require('ejs');

const couchdbBaseUrl = 'http://127.0.0.1:5984/';

const app = express();
app.set('view engine', 'ejs');

//routing path
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

const getDbs = async () => {
    const requestEndpoint = '';
    const requestParams = '';
    const urlToFetch = couchdbBaseUrl + requestEndpoint + requestParams;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const genres = jsonResponse.genres;
        console.log(genres);
        return genres;
      }
    }
    catch (error) {
      console.log(error);
    }
};

// getDbs();