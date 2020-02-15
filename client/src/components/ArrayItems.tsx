import React from 'react';

import './styles/ArrayItems.css';

import ArrayItem from './ArrayItem';

type Props = {
  arrayItems: number[];
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
};

export const ArrayItems = ({ arrayItems, onChangeHandler }: Props) => {
  const renderItems = (numbers: number[]) =>
    numbers.map((item, index) => (
      <ArrayItem
        key={`key--${index}`}
        item={item}
        index={index}
        onChangeHandler={onChangeHandler}
      />
    ));

  return <div className='array'>{renderItems(arrayItems)}</div>;
};
