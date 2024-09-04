//const axios = require('axios');const user = require('user');

const couchdbBaseUrl = 'http://127.0.0.1:5984/';

const couchDbGet = async (baseUrl, requestEndpoint, requestParams) => {
    const urlToFetch = baseUrl + requestEndpoint + requestParams;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    catch (error) {
      console.log(error);
    }
};

const getNewUuids = async (baseUrl, numOfUuids) => {
    try{  
      const requestEndpoint = '/_uuids';
      const requestParams = `?count=${numOfUuids}`;
      const response = await couchDbGet (baseUrl, requestEndpoint, requestParams);
    }
    catch (error) {
      console.error(error);
    }
    
}
const uuids = await getNewUuids(couchdbBaseUrl, 1);
console.log(uuids);


//module.exports = { getNewUuids };