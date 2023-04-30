import Link from "next/link";
import styles from "./footer-items.module.scss";

export default function FooterItems() {
  const footerNavItems = [
    { label: "Contact", href: "/contact" },
    { label: "Stay Connected", href: "/mail" },
    { label: "Shipping & Policies", href: "/shipping-and-policies" },
    { label: "Special Projects", href: "/special-projects" },
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
