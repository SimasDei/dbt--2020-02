import axios from 'axios';

export const getNumberArray = async () => {
  try {
    const {
      data: { success, data },
    } = await axios({
      method: 'GET',
      url: 'http://localhost:5000/api/v1/algo',
    });
    if (success) return Promise.resolve(data.numberArray);
    return Promise.resolve(false);
  } catch (error) {
    return Promise.reject(error);
  }
};
