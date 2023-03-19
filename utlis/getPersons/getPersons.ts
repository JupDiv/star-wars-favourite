import axios from 'axios';
import { Person } from '../../entites/types/Person';

const getPersons = async () => {
  try {
    const url = 'https://swapi.dev/api/people/';
    const {
      data: { results },
    } = await axios.get<{ results: Person[] }>(url, {
      headers: { 'Content-Type': 'application/json' },
      params: { page: 1 },
    });
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default getPersons;
