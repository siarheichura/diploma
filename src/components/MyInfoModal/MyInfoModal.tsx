import styles from "./MyInfoModal.module.css";

import { AboutMe } from "../AboutMe";
import { ContactMe } from "../ContactMe";

export function MyInfoModal() {
  return (
    <div className={styles.infoPageWrapper}>
      <div className={styles.infoModal}>
        <AboutMe />
        <ContactMe />
      </div>
    </div>
  );
}
