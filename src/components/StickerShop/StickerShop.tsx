import styles from "./StickerShop.module.css";

export function StickerShop() {
  return (
    <div className={styles.stickerShop}>
      <div>Buy my Sticker on your car.</div>

      <div className={styles.shopContainer}>
        <div className={styles.shopItem}>insta Nikname</div>
        <div className={styles.shopItem}>car Zvonilki</div>
        <div className={styles.shopItem}>Reklama Na Zadnee Steklo</div>
        <div className={styles.shopItem}>Tvoi Variantik</div>
      </div>
    </div>
  )

}
