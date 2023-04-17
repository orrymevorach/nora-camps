import DropDown from '@/components/shared/form-components/drop-down/drop-down';
import styles from './collections-drop-down.module.scss';

export default function CollectionsDropDown({ setSelectedCollection }) {
  const listItems = [
    'All',
    'Landscape',
    'Abstract',
    'Floral',
    'Portal',
    'Smalls',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.borderTop}>
        <p className={styles.filterBy}>Filter By</p>
        <DropDown
          isReactHookForm={false}
          listItems={listItems}
          handleChange={setSelectedCollection}
          attributes={{
            defaultValue: 'Collections',
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
