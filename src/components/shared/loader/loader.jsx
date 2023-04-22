import styles from './loader.module.scss';
import clsx from 'clsx';

export default function Loader({ centerInContainer = false }) {
  return (
    <div
      className={clsx(
        styles['lds-ring'],
        centerInContainer && styles.centerInContainer
      )}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
