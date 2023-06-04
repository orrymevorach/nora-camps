import styles from "./collections-drop-down.module.scss";
import DropDown from "@/components/shared/form-components/drop-down/drop-down";

export default function CollectionsDropDown({ collections = [] }) {
  const sortedCollection = collections
    .sort((a, b) => {
      if (a.order < b.order) return -1;
      if (a.order > b.order) return 1;
      return 0;
    })
    .map(({ name }) => name);

  return (
    <div className={styles.container}>
      <div className={styles.borderTop}>
        <p className={styles.filterBy}>Filter By</p>
        <DropDown
          isReactHookForm={false}
          listItems={["All", ...sortedCollection]}
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
