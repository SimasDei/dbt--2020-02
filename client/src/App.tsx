//@ts-nocheck
import React, { useEffect, useState } from 'react';

import { getNumberArray } from './api';
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
      state[index] = +value;
      return state;
    });
    console.log(value, arrayItems);
  };

  if (!arrayItems.length) return <div className='App'>Loading...</div>;

  return (
    <div className='App'>
      <ArrayItems arrayItems={arrayItems} onChangeHandler={onChangeHandler} />
    </div>
  );
};

export default App;
