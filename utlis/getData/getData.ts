import axios from 'axios';
import Data from '../../entites/types/Data';

const getData = async () => {
  try {
    const url = 'https://swapi.dev/api/people/';
    const {
      data: { results },
    } = await axios.get<Data>(url, {
      headers: { 'Content-Type': 'application/json' },
      params: { page: 2 },
    });
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
