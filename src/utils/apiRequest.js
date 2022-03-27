const axios = require("axios");

const get = (url) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const apiFetcher = {
  get,
};

export default apiFetcher;
