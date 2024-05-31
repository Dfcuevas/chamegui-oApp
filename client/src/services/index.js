import axios from "axios";

const BASE_URL = "http://localhost:3000/pets";

const fetchPetsData = async () => {
  const { data } = await axios.get(BASE_URL);

  return data;
};

export default fetchPetsData;
