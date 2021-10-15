import styles from "./MainInfo.module.css";

export function MainInfo() {
  return (
    <div className={`${styles.mainInfo}`}>
      <p className={styles.myName}>Sergei Chura</p>
      <p className={styles.myJob}>Frontend Developer</p>
      <button className={styles.aboutMeBtn}>About Me</button>
    </div>
  );
}
