import axios from 'axios';

const getPlanet = async () => {
  try {
    const url = 'https://swapi.dev/api/planets/1/';
    const {
      data: { results },
    } = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default getPlanet;
