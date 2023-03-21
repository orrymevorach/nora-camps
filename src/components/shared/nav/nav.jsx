import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav() {
  const navLinks = ['Home', 'Paintings', 'Exhibitions', 'About', 'Contact'];

  return (
    <div className='container'>
      <nav className='navigation'>
        <ul className='navUl'>
          {navLinks.map(link => {
            <li className='navLi'>
              <Link href={`/${link.toLowerCase()}`} />
            </li>;
          })}
        </ul>
      </nav>
    </div>
  );
}
