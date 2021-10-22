import styles from "./StickerShop.module.css";

export function StickerShop() {

  return (
    <div className={styles.stickerShop}>
      <div>Buy my Sticker on your car.</div>

      <div className={styles.shopContainer}>
        <div className={`${styles.shopItem} ${styles.insta}`}>instagram nickname</div>
        <div className={`${styles.shopItem} ${styles.call}`}>call me</div>
        <div className={`${styles.shopItem} ${styles.window}`}>rear window advertisement</div>
        <div className={styles.shopItem}>Tvoi Variantik</div>
      </div>
    </div>
  )

}
