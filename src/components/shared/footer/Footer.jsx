import Link from 'next/link';
import Image from 'next/image';
import ncLogo from 'images/NC.png';
import styles from './Footer.module.scss';
import Facebook from 'svg/Facebook';
import Instagram from 'svg/Instagram';

export default function Footer() {
  const footerNavItems = [
    { label: 'Contact', href: '/contact' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Shipping & Policies', href: '/shipping' },
    { label: 'Special Projects', href: 'projects' },
  ];

  return (
    <footer className={styles.container}>
      <nav className={styles.footerNav}>
        <ul className={styles.footerUl}>
          {footerNavItems.map(item => {
            return (
              <li key={`footer ${item.label}`} className={styles.footerLi}>
                <Link href={item.href} className={styles.nextLink}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.footerLine} />
      <div className={styles.footerSocials}>
        <div className={styles.footerLogoBackground}>
          <Image src={ncLogo} alt='footer logo' />
        </div>
        <Facebook />
        <Instagram />
      </div>
    </footer>
  );
}
