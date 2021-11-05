import styles from "./Button.module.css";

interface IProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: IProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}
