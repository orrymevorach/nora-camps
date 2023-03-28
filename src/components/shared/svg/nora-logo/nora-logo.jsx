import Image from 'next/image';
import ncLogo from 'images/NC.png';
import styles from './nora-logo.module.scss';

export default function NoraLogo() {
  return (
    <>
      <Image className={styles.noraLogo} src={ncLogo} alt='main logo' />
    </>
  );
}
