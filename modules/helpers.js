import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const getData = async (resource) => {
  const res = await axios.get(base_url + resource);

  return res;
};
export const postData = async (resource, body) => {
    const res = await axios.get(base_url + resource, body);
  
    return res;
  };