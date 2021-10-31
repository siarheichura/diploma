import { useHistory } from "react-router";

import styles from "./MainPage.module.css";

export function MainPage() {
  let history = useHistory();

  const onBtnClick = () => {
    history.push("/my-info");
  };

  return (
    <div className={`${styles.mainInfo}`}>
      <p className={styles.myName}>Sergei Chura</p>
      <p className={styles.myJob}>Frontend Developer</p>
      <button className={styles.aboutMeBtn} onClick={onBtnClick}>
        About Me
      </button>
    </div>
  );
}
