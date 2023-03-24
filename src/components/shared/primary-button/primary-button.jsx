import styles from './primary-button.module.scss';
import RightArrow from '@/components/shared/svg/RightArrow/RightArrow';
import Link from 'next/link';
import clsx from 'clsx';

export default function PrimaryButton({
  children,
  handleClick,
  href = null,
  classNames = '',
}) {
  if (href) {
    return (
      <Link href={href} className={clsx(styles.primaryButton, classNames)}>
        <p>{children}</p>
        <RightArrow />
      </Link>
    );
  }
  return (
    <button
      className={clsx(styles.primaryButton, classNames)}
      onClick={handleClick}
    >
      <p>{children}</p>
      <RightArrow />
    </button>
  );
}
