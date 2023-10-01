// backend/controllers/fetchDataFromExternalAPI.js
import https from 'https';
import { promisify } from 'util';

const get = promisify(https.get);

async function fetchDataFromExternalAPI(apiEndpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
    };

    const request = https.get(apiEndpoint, options, (response) => {
      let data = '';

      // A chunk of data has been received.
      response.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    // Handle errors
    request.on('error', (error) => {
      reject(error);
    });

    request.end();
  });
}

export default fetchDataFromExternalAPI;
