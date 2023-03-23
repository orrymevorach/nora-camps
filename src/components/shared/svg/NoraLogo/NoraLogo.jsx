import Image from 'next/image';
import ncLogo from 'images/NC.png';
import styles from './NoraLogo.module.scss';

export default function NavLogo() {
  return (
    <div className={styles.container}>
      <Image src={ncLogo} alt='main logo' />
    </div>
  );
}
