import { useState, useRef, useEffect } from "react";
import DropDownMenu from "./list/list";
import DownArrow from "svg/down-arrow";
import MagnifyingGlass from "svg/magnifying-glass";

export default function DropDown({
  isReactHookForm = false,
  iconType = 'drop-down',
  setValue = "",
  listItems = [],
  attributes = {},
  classNames = '',
  label = '',
  handleChange,
}) {
  const [isToggled, setIsToggled] = useState(false);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (iconType === 'magnifying-glass' && listItems.length) {
      setIsToggled(true);
    }
  }, [iconType, listItems])

  return (
    <div className={classNames.container}>
      <div className={classNames.inputGroup}>
        {isReactHookForm && <label className={classNames.label}>{label}</label>}
        <input className={classNames.input} ref={inputRef} {...attributes}/>
        <button
          type="button"
          className={classNames.dropDownButton}
          id="drop-down-arrow"
          onClick={() => setIsToggled(prev => !prev)}
        >
          { iconType === 'drop-down' && <DownArrow /> }
          { iconType === 'magnifying-glass' && <MagnifyingGlass /> }
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
