import React from 'react';

import mario from '../assets/mario.jpg';
import './styles/ArrayItems.css';

type Props = {
  winnable: boolean;
  jumps: number[];
  blocks: number[];
};

export const ArrayResults = ({ winnable, jumps, blocks }: Props) => {
  const getJumps = () => {
    const jumpPoints = jumps.map((value, index, self) => {
      if (self.indexOf(value) === index) return index;
      return 0;
    });
    jumpPoints.shift();
    return jumpPoints;
  };

  const Block = ({ block }: { block: number }) => {
    return (
      <div className='array__item'>
        <div className='array__item__input'>
          {getJumps().includes(block + 1) && <img className='array__item__img' src={mario} />}
        </div>
      </div>
    );
  };

  if (!winnable) return <p className='array__status'>Unreachable 😢</p>;

  return (
    <div className='results'>
      <p className='array__status'>Winnable !</p>

      <div className='array'>
        {blocks.map((_, index) => (
          <Block key={index} block={index} />
        ))}
      </div>
    </div>
  );
};

export default ArrayResults;
