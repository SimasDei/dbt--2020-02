import React, { useEffect, useState } from 'react';

import { getNumberArray, checkNumberArray } from './api';
import './app.css';

import { ArrayItems, ArrayResults } from './components';

const App = () => {
  const [arrayItems, setArrayItems] = useState([]);
  const [calculated, setCalculated] = useState({
    numArray: [],
    maxReach: null,
    step: null,
    jump: null,
    end: null,
    position: null,
    jumps: [],
    winnable: false,
  });

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
      //@ts-ignore
      state[index] = +value;
      return [...state];
    });
  };

  const onClickHandler = async () => {
    if (JSON.stringify(calculated.numArray) === JSON.stringify(arrayItems)) {
      setCalculated(calculated);
      return;
    }

    const result = await checkNumberArray(arrayItems);
    setCalculated(result);
  };

  const renderAnswer = () => {
    if (!calculated.numArray.length) return;

    return (
      <ArrayResults
        winnable={calculated.winnable}
        jumps={calculated.jumps}
        blocks={calculated.numArray}
      />
    );
  };

  if (!arrayItems.length) return <div className='App'>Loading...</div>;

  return (
    <div className='App'>
      <ArrayItems arrayItems={arrayItems} onChangeHandler={onChangeHandler} />
      <button className='btn' onClick={onClickHandler}>
        Submit
      </button>
      {renderAnswer()}
    </div>
  );
};

export default App;
