import axios from 'axios';

const getData = async () => {
  try {
    const url = 'https://swapi.dev/api/people/';
    const {
      data: { results },
    } = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' },
      params: { page: 1 },
    });
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
