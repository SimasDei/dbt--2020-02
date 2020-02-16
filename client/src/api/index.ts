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

export const checkNumberArray = async (arrayItems: number[]) => {
  try {
    const {
      data: { success, data },
    } = await axios({
      method: 'POST',
      url: 'http://localhost:5000/api/v1/algo',
      data: {
        result: arrayItems,
      },
    });

    if (success) return Promise.resolve({ result: data.result });
    return Promise.resolve(false);
  } catch (error) {
    return Promise.reject(error);
  }
};
