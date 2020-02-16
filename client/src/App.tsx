//@ts-nocheck
import React, { useEffect, useState } from 'react';

import { getNumberArray, checkNumberArray } from './api';
import './app.css';

import { ArrayItems } from './components';

const App = () => {
  const [arrayItems, setArrayItems] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getNumberArray();
      if (result) setArrayItems(result);
    })();
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const {
      target: { value },
    } = e;
    setArrayItems(state => {
      console.log({ state });
      state[index] = +value;
      return [...state];
    });
  };

  const onClickHandler = async () => {
    const result = await checkNumberArray(arrayItems);
    console.log(result);
  };

  if (!arrayItems.length) return <div className='App'>Loading...</div>;

  return (
    <div className='App'>
      <ArrayItems arrayItems={arrayItems} onChangeHandler={onChangeHandler} />
      <button onClick={onClickHandler}>Submit</button>
    </div>
  );
};

export default App;
