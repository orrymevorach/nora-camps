import { useEffect, useRef, useState } from 'react';
import DownArrow from '@/components/shared/svg/down-arrow';
import styles from './collections-drop-down.module.scss';

export default function CollectionsDropDown() {
  const collections = [
    'All',
    'Landscapes',
    'Abstracts',
    'Floral',
    'Portal',
    'Smalls',
  ];
  const [isToggled, setIsToggled] = useState(false);
  const [dropDownValue, setDropDownValue] = useState('');
  const inputRef = useRef(null);

  const toggleDropDown = () => {
    setIsToggled(prev => !prev);
  };

  useEffect(() => {
    const updateInputValue = () => {
      inputRef.current.value = dropDownValue;
      setIsToggled(false);
    };
    if (dropDownValue) {
      updateInputValue();
    }
  }, [dropDownValue]);

  return (
    <div className={styles.container}>
      <div className={styles.borderTop}>
        <p className={styles.filterBy}>Filter By</p>
        <div className={styles.dropDown}>
          <button
            className={styles.openDropDown}
            onClick={() => toggleDropDown()}
          >
            <input
              className={styles.input}
              ref={inputRef}
              defaultValue='Collections'
              readOnly
              tabIndex={-1}
            />
            <div className={styles.downArrow}>
              <DownArrow />
            </div>
          </button>
          {isToggled && (
            <ul className={styles.ul}>
              {collections.map(item => {
                return (
                  <li
                    tabIndex={0}
                    className={styles.li}
                    onClick={() => setDropDownValue(item)}
                    key={item}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}