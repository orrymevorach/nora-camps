import { useState, useRef } from 'react';
import DropDownMenu from './list/list';
import DownArrow from '../../svg/down-arrow';

export default function DropDown({
  form = false,
  setValue = '',
  listItems = [],
  attributes = {},
  classNames = '',
}) {
  const [isToggled, setIsToggled] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className={classNames.container}>
      <div className={classNames.inputGroup}>
        {form && (
          <label className={classNames.label}>Painting(s) interested in</label>
        )}
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
          form={form}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          setValue={setValue}
          listItems={listItems}
          reference={inputRef}
        />
      )}
    </div>
  );
}
