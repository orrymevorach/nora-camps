import MagSmallBackground from '@/components/shared/svg/magnifying-glass-small';
import styles from './search-bar.module.scss';

export default function SearchBar() {
  const submitSearch = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={e => submitSearch(e)}>
        <input autoFocus placeholder='Search for a painting or collection' />
        <button type='submit'>
          <MagSmallBackground />
        </button>
      </form>
    </div>
  );
}
