import { useState, useRef, useEffect } from "react";
import DropDownMenu from "./list/list";
import DownArrow from "svg/down-arrow";
import { useRouter } from "next/router";
import { set } from "react-hook-form";

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

  useEffect(() => {
    if (query.collection) {
      inputRef.current.value = query.collection;
    }
  }, [asPath]);

  return (
    <div className={classNames.container}>
      <div className={classNames.inputGroup}>
        {isReactHookForm && <label className={classNames.label}>{label}</label>}
        <input className={classNames.input} ref={inputRef} {...attributes} />
        <button
          type="button"
          className={classNames.dropDownButton}
          id="drop-down-arrow"
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
          listItems={listItems}
          reference={inputRef}
          classNames={classNames.listStyle}
        />
      )}
    </div>
  );
}
