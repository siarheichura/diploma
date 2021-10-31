import styles from "./InstaResult.module.css";

export interface IProps {
  instaLogo: string;
  instaNick: string;
}

export function InstaResult({ instaLogo, instaNick }: IProps) {
  return (
    <div className={styles.result}>
      <img className={styles.resultLogo} src={instaLogo} alt="instaLogo" />
      <p className={styles.resultNick}>{instaNick}</p>
    </div>
  );
}
