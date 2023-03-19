import axios from 'axios';

const getSpecies = async (url: string) => {
  try {
    const {
      data: { name },
    } = await axios.get<{ name: string }>(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    return name;
  } catch (error) {
    console.log(error);
  }
};

export default getSpecies;
