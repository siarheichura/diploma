import styles from "./InstaResult.module.css";

export interface IProps {
  instaLogo: any;
  instaNick: string;
  size: any;
}

export function InstaResult({ instaLogo, instaNick, size }: IProps) {
  return (
    <div className={size === "big" ? styles.result : styles.resultSmall}>
      <img
        className={size === "big" ? styles.resultLogo : styles.resultLogoSmall}
        src={instaLogo}
        alt="instaLogo"
      />
      <p className={styles.resultNick}>{instaNick}</p>
    </div>
  );
}
