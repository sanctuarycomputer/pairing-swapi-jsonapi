const swapi = require('../swapi');

const Planets = {};

Planets.get = async (req, res) => {
  const planet = await swapi.get('planets/1');

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(planet));
};

module.exports = Planets;
