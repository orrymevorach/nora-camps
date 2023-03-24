import MagSmallBackground from 'svg/MagGlassSmallBackground';
import styles from './Search.module.scss';

export default function Search() {
  const submitSearch = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={e => submitSearch(e)}>
        <input
          autoFocus
          type='search'
          placeholder='Search for a painting or collection'
        />
        <button type='submit'>
          <MagSmallBackground />
        </button>
      </form>
    </div>
  );
}
