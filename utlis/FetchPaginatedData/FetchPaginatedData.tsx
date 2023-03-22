import axios from 'axios';
import CommonTypes from '../../entites/types/CommonTypes';

type urlForPagination = number;
type paginationResponse = Pick<CommonTypes, 'next' | 'previous'>;

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
