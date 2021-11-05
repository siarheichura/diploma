import styles from "./InstaResult.module.css";

export interface IProps {
  instaLogo: any;
  instaNick: string;
  size: any;
  // stickerWidth: string;
  // stickerHeight: string;
  // stickerComment: string;
}

export function InstaResult({ instaLogo, instaNick, size }: IProps) {
  // size = 'big' / 'small'

  return (
    // <div className={styles.result}>
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
