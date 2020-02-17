import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

export const getNumberArray = async () => {
  try {
    const {
      data: { success, data },
    } = await axios({
      method: 'GET',
      url: '/algo',
    });
    if (success) return Promise.resolve(data.numberArray);
    return Promise.resolve(false);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const checkNumberArray = async (arrayItems: number[]) => {
  try {
    const {
      data: { success, data },
    } = await axios({
      method: 'POST',
      url: '/algo',
      data: {
        result: arrayItems,
      },
    });

    if (success) return Promise.resolve(data.result);
    return Promise.resolve(false);
  } catch (error) {
    return Promise.reject(error);
  }
};
