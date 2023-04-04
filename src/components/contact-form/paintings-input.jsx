import DropDownMenu from './drop-down-menu/drop-down-menu';
import DownArrow from '../shared/svg/down-arrow';
import clsx from 'clsx';

export default function PaintingsInput({
  styles,
  isToggled,
  setIsToggled,
  register,
  setValue,
}) {
  return (
    <div className={styles.painting}>
      <div className={clsx(styles.formGroup)}>
        <label>Painting(s) interested in</label>
        <input
          placeholder='Type painting'
          className={styles.input}
          {...register('paintings')}
        />
        <button
          type='button'
          className={styles.dropDownButton}
          id='drop-down-arrow'
          onClick={() => setIsToggled(prev => !prev)}
        >
          <DownArrow />
        </button>
      </div>
      {isToggled && (
        <DropDownMenu
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          setValue={setValue}
        />
      )}
    </div>
  );
}
