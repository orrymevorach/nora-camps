import Link from 'next/link';
import styles from './footer-items.module.scss';

export default function FooterItems() {
  const footerNavItems = [
    { label: 'Contact', href: '/contact' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Shipping & Policies', href: '/shipping' },
    { label: 'Special Projects', href: '/projects' },
  ];

  return (
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
  );
}
