
import axios from 'axios';

const API_KEY = 'a40498d74e584bfe8e68bb07b72ce51c';
const BASE_URL = 'https://newsapi.org/v2';

const getNews = (category = '', page = 1, pageSize = 10) => {
  return axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      apiKey: API_KEY,
      category,
      page,
      pageSize,
      country: 'us',
    },
  });
};

export default { getNews };
