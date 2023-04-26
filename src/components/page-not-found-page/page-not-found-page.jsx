import styles from "./page-not-found-page.module.scss";
import PrimaryButton from "@/components/shared/primary-button";
import Wrapper from "../shared/wrapper/wrapper";

export default function PageNotFoundPage() {
  return (
    <Wrapper>
      <PrimaryButton isLeftArrow href="/" hasBorder={false} isMedium smallText>
        Back to home
      </PrimaryButton>
      <div className={styles.pageNotFoundContainer}>
        <h2 className={styles.title}>404: Page Not Found</h2>
        <p className={styles.apologies}>Apologies, this page does not exist</p>
      </div>
    </Wrapper>
  );
}
