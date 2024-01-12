import axios from 'axios';

const params = {
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
  },
};
// eslint-disable-next-line consistent-return
const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url, params);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchDataFromApi;
