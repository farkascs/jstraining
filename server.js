const express = require('express');
const ejs = require('ejs');
//const fetch = require('node-fetch');

const couchdbBaseUrl = 'http://127.0.0.1:5984/';

const app = express();
app.set('view engine', 'ejs');

//routing path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(2000, () => {
  console.log('Server started on port 2000');
});


const checkCouchDB = async () => {
    const requestEndpoint = '';
    const requestParams = '';
    const urlToFetch = couchdbBaseUrl + requestEndpoint + requestParams;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('CouchDB Online');
        return jsonResponse;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    catch (error) {
      console.log(error);
    }
};

checkCouchDB();
