const user = require('user');

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
/*
couchDbGet(couchdbBaseUrl, '/_uuids', '?count=1')
    .then(data => console.log(data.uuids[0]))
    .catch(error => console.error(error));


//store the received uuid in a variable
let uuid = '';
couchDbGet(couchdbBaseUrl, '/_uuids', '?count=1')
    .then(data => uuid = data.uuids[0])
    .catch(error => console.error(error));
*/
const getNewUuids = async (baseUrl, numOfUuids) => {
    try{  
      const requestEndpoint = '/_uuids';
      const requestParams = `?count=${numOfUuids}`;
      const data = await couchDbGet (baseUrl, requestEndpoint, requestParams);
      return data.uuids;
    }
    catch (error) {
      console.error(error);
    }
}
const uuids = await getNewUuids(couchdbBaseUrl, 1);
console.log(uuids);


//module.exports = { getNewUuids };