import { useEffect, useRef, useState } from "react";
import styles from "./collections-drop-down.module.scss";
import DropDown from "@/components/shared/form-components/drop-down/drop-down";

export default function CollectionsDropDown() {
  const listItems = [
    "All",
    "Landscapes",
    "Abstracts",
    "Floral",
    "Portal",
    "Smalls",
  ];
  const [isToggled, setIsToggled] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");
  const inputRef = useRef(null);

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
        <DropDown
          isReactHookForm={false}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          setDropDownValue={setDropDownValue}
          listItems={listItems}
          attributes={{
            defaultValue: "Collections",
            tabIndex: -1,
            readOnly: true,
          }}
          classNames={{
            container: styles.dropDownContainer,
            inputGroup: styles.inputGroup,
            input: styles.input,
            dropDownButton: styles.downArrow,
            listStyle: {
              ul: styles.ul,
              li: styles.li,
            },
          }}
        />
      </div>
    </div>
  );
}
