import axios from 'axios';
import Data from '../../entites/types/Data';

type urlForPagination = number;
type paginationResponse = Pick<Data, 'next' | 'previous'>;

const getPagination = async (numberOfPage: urlForPagination) => {
  try {
    const url = 'https://swapi.dev/api/people/';
    const {
      data: { next, previous },
    } = await axios.get<paginationResponse>(url, {
      headers: { 'Content-Type': 'application/json' },
      params: { page: numberOfPage },
    });

    return { next, previous };
  } catch (error) {
    console.log(error);
  }
};

export default getPagination;
