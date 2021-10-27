import { useState } from "react";
import { StickerShopModal } from "../StickerShopModal";
import styles from "./StickerShop.module.css";

export function StickerShop() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className={styles.stickerShop}>
      <div className={styles.shopHeading}>
        <div>Buy my Sticker on your car.</div>
        <div className={styles.bascket}></div>
      </div>

      <div className={styles.shopContainer}>
        <div className={styles.itemWrap} onClick={toggleModal}>
          <div className={`${styles.shopItem} ${styles.insta}`}>
            instagram nickname
          </div>
        </div>
        <div className={styles.itemWrap}>
          <div className={`${styles.shopItem} ${styles.call}`}>call me</div>
        </div>
        <div className={styles.itemWrap}>
          <div className={`${styles.shopItem} ${styles.window}`}>
            rear window advertisement
          </div>
        </div>
        <div className={styles.itemWrap}>
          <div className={styles.shopItem}>Tvoi Variantik</div>
        </div>
      </div>
      {isModalVisible ? <StickerShopModal toggleModal={toggleModal} /> : null}
    </div>
  );
}
