import styles from "./primary-button.module.scss";
import RightArrow from "@/components/shared/svg/right-arrow/right-arrow";
import Link from "next/link";
import clsx from "clsx";

const ButtonContent = ({ children, isLeftArrow }) => {
  return (
    <>
      {isLeftArrow && <RightArrow flip />}
      <p>{children}</p>
      {!isLeftArrow && <RightArrow />}
    </>
  );
};

export default function PrimaryButton({
  children,
  handleClick,
  href = null,
  classNames = "",
  isLeftArrow = false,
  hasBorder = true,
  isBold = false,
}) {
  const className = clsx(
    styles.primaryButton,
    classNames,
    hasBorder && styles.border,
    isBold && styles.bold
  );
  if (href) {
    return (
      <Link href={href} className={className}>
        <ButtonContent isLeftArrow={isLeftArrow}>{children}</ButtonContent>
      </Link>
    );
  }
  return (
    <button className={className} onClick={handleClick}>
      <ButtonContent isLeftArrow={isLeftArrow}>{children}</ButtonContent>
    </button>
  );
}
