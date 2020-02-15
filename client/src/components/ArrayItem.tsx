import React from 'react';

import './styles/ArrayItems.css';

type Props = {
  item: number;
  index: number;
  key: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>, index: Props['index']) => void;
};

export const ArrayItem = ({ item, index, onChangeHandler }: Props) => {
  return (
    <div className='array__item'>
      <input
        className='array__item__input'
        type='number'
        value={item}
        onChange={e => onChangeHandler(e, index)}
      />
    </div>
  );
};

export default ArrayItem;
