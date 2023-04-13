import { useEffect, useRef, useCallback } from 'react';
import styled from './list.module.scss';

export default function DropDownMenu({
  isForm = '',
  isToggled = false,
  setIsToggled,
  setValue = '',
  reference = '',
  listItems,
  classNames = '',
}) {
  const ulRef = useRef(null);

  const handleKeyPress = (e, option) => {
    const listItems = document.querySelectorAll('#drop-down-li');
    const activeElement = document.activeElement;

    if (e.key === 'Enter') {
      setValueAndCloseDropDown(option);
    }

    if (e.key === 'ArrowUp') {
      setDropDownLiFocus(activeElement, listItems, '-');
    }

    if (e.key === 'ArrowDown') {
      setDropDownLiFocus(activeElement, listItems, '+');
    }

    if (e.key === 'Escape') {
      closeDropDown();
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

  const setValueAndCloseDropDown = option => {
    isForm ? setValue('paintings', option) : (reference.current.value = option);
    closeDropDown();
  };

  const closeDropDown = useCallback(() => {
    setIsToggled(false);
    document.body.style.overflow = 'visible';
  }, [setIsToggled]);

  useEffect(() => {
    const closeDropDownByLosingFocus = e => {
      document.body.style.overflow = 'visible';
      const target = e.target;
      if (
        ulRef.current &&
        !ulRef.current.contains(target) &&
        target.id !== 'drop-down-arrow'
      ) {
        closeDropDown();
      }
    };

    document.addEventListener('mouseup', closeDropDownByLosingFocus);
    return () =>
      document.removeEventListener('mouseup', closeDropDownByLosingFocus);
  }, [ulRef, closeDropDown]);

  useEffect(() => {
    if (isToggled) {
      const dropDownLi = document.querySelectorAll('#drop-down-li');
      document.body.style.overflow = 'hidden';
      dropDownLi[0].focus();
    }
  }, [isToggled]);

  return (
    <>
      <ul ref={ulRef} className={isForm ? styled.ul : classNames.ul}>
        {listItems.map(option => {
          return (
            <li
              tabIndex='0'
              className={isForm ? styled.li : classNames.li}
              id='drop-down-li'
              key={option}
              onKeyDown={e => handleKeyPress(e, option)}
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
