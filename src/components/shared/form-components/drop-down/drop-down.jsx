import { useState, useRef, useEffect } from "react";
import DropDownMenu from "./list/list";
import DownArrow from "svg/down-arrow";
import { useRouter } from "next/router";

export default function DropDown({
  isReactHookForm = false,
  setValue = "",
  listItems = [],
  attributes = {},
  classNames = "",
  label = "",
}) {
  const [isToggled, setIsToggled] = useState(false);
  const inputRef = useRef(null);
  const { asPath, query } = useRouter();

  const handleClick = e => {
    e.stopPropagation();
    setIsToggled(prev => !prev);
  };

  useEffect(() => {
    if (query.collection) {
      inputRef.current.value = query.collection;
    }
  }, [asPath]);

  return (
    <div className={classNames.container}>
      <div className={classNames.inputGroup} onClick={e => handleClick(e)}>
        {isReactHookForm && <label className={classNames.label}>{label}</label>}
        <input
          readOnly
          className={classNames.input}
          ref={inputRef}
          {...attributes}
        />
        <button
          type="button"
          className={classNames.dropDownButton}
          id="drop-down-arrow"
          onClick={e => handleClick(e)}
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
          listItems={listItems}
          reference={inputRef}
          classNames={classNames.listStyle}
        />
      )}
    </div>
  );
}
