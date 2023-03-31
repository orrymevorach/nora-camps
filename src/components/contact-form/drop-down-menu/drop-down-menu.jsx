import { useState } from 'react';
import styled from './drop-down-menu.module.scss';

export default function DropDownMenu() {
  const [isToggled, setIsToggled] = useState(false);
  const testPaintings = [
    'Landscape',
    'Mountain',
    'River',
    'Grassland',
    'House',
  ];

  return (
    // <div className={styled.container}>
    <>
      {/* <input className={styled.input} /> */}

      <button
        className={styled.button}
        onClick={() => setIsToggled(prev => !prev)}
      >{`>`}</button>
      {isToggled && (
        <ul className={styled.ul}>
          {testPaintings.map(option => {
            return (
              <li className={styled.li} key={option}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
