import axios from 'axios';
import Data from '../../entites/types/Data';

const getPagination = async (numberOfPage: number = 1) => {
  try {
    const url = 'https://swapi.dev/api/people/';
    const {
      data: { next, previous },
    } = await axios.get<Data>(url, {
      headers: { 'Content-Type': 'application/json' },
      params: { page: numberOfPage },
    });
    console.log(next, previous);
    return { next, previous };
  } catch (error) {
    console.log(error);
  }
};

export default getPagination;
