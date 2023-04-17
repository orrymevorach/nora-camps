import { useState, useRef } from 'react';
import DropDownMenu from './list/list';
import DownArrow from 'svg/down-arrow';

export default function DropDown({
  isReactHookForm = false,
  setValue = '',
  listItems = [],
  attributes = {},
  classNames = '',
  label = '',
  handleChange,
}) {
  const [isToggled, setIsToggled] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className={classNames.container}>
      <div className={classNames.inputGroup}>
        {isReactHookForm && <label className={classNames.label}>{label}</label>}
        <input className={classNames.input} ref={inputRef} {...attributes} />
        <button
          type='button'
          className={classNames.dropDownButton}
          id='drop-down-arrow'
          onClick={() => setIsToggled(prev => !prev)}
        >
          <DownArrow />
        </button>
      </div>
      {isToggled && (
        <DropDownMenu
          isReactHookForm={isReactHookForm}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          setValue={setValue}
          handleChange={handleChange}
          listItems={listItems}
          reference={inputRef}
          classNames={classNames.listStyle}
        />
      )}
    </div>
  );
}
