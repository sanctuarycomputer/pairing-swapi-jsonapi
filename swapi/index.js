const request = require('request');

const BASE_URL = 'http://swapi.co/api/';

module.exports = {
  get(path) {
    const options = { url: `${BASE_URL}${path}` };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error || response.statusCode > 399) {
          return reject({ error: response.statusCode });
        }

        let jsonBody;
        try {
          jsonBody = JSON.parse(body);
        } catch (e) {
          return reject({ error: 'JSON parse error' });
        }

        return resolve(jsonBody);
      });
    });
  }
}
