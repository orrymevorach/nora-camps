import { useEffect, useRef } from 'react';
import styled from './drop-down-menu.module.scss';

export default function DropDownMenu({ isToggled, setIsToggled, setValue }) {
  const ulRef = useRef(null);
  const testPaintings = [
    'Landscape',
    'Mountain',
    'River',
    'Grassland',
    'House',
  ];

  const setValueAndCloseDropDown = option => {
    setValue('paintings', option);
    dropDownToggle();
  };

  const enterKeyPressed = (e, option) => {
    const listItems = document.querySelectorAll('#drop-down-li');
    const activeElement = document.activeElement;

    if (e.key === 'Enter') {
      setValue('paintings', option);
      dropDownToggle();
    }

    if (e.key === 'ArrowUp') {
      setDropDownLiFocus(activeElement, listItems, '-');
    }

    if (e.key === 'ArrowDown') {
      setDropDownLiFocus(activeElement, listItems, '+');
    }

    if (e.key === 'Escape') {
      dropDownToggle();
    }
  };

  const setDropDownLiFocus = (activeElement, listItems, symbol) => {
    const addSymbol = symbol === '+';
    const boundary = addSymbol
      ? activeElement !== listItems[listItems.length - 1]
      : activeElement !== listItems[0];

    for (let i = 0; i < listItems.length; i++) {
      if (activeElement === listItems[i] && boundary) {
        addSymbol ? listItems[i + 1].focus() : listItems[i - 1].focus();
        break;
      }
    }
  };

  const dropDownToggle = () => {
    setIsToggled(false);
  };

  useEffect(() => {
    const closeDropDownByClick = e => {
      const target = e.target;
      if (
        ulRef.current &&
        !ulRef.current.contains(target) &&
        target.id !== 'drop-down-arrow'
      ) {
        dropDownToggle();
      }
    };

    document.addEventListener('mouseup', closeDropDownByClick);
    return () => document.removeEventListener('mouseup', closeDropDownByClick);
  }, [ulRef]);

  useEffect(() => {
    if (isToggled) {
      const listItems = document.querySelectorAll('#drop-down-li');
      listItems[0].focus();
    }
  }, [isToggled]);

  return (
    <>
      <ul ref={ulRef} className={styled.ul}>
        {testPaintings.map(option => {
          return (
            <li
              tabIndex='0'
              className={styled.li}
              id='drop-down-li'
              key={option}
              onKeyDown={e => enterKeyPressed(e, option)}
              onClick={() => setValueAndCloseDropDown(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </>
  );
}
