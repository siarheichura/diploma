import styles from "./StickerCounter.module.css";

interface IProps {
  stickerCounter: number;
  incrementStickerCounter: () => void;
  decrementStickerCounter: () => void;
}

export function StickerCounter({
  stickerCounter,
  incrementStickerCounter,
  decrementStickerCounter,
}: IProps) {
  return (
    <div className={styles.counter}>
      <button onClick={decrementStickerCounter}>-</button>
      <p>{stickerCounter}</p>
      <button onClick={incrementStickerCounter}>+</button>
    </div>
  );
}
