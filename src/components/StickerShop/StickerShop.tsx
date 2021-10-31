import { useState } from "react";
import { useHistory } from "react-router";

import styles from "./StickerShop.module.css";

import { StickerShopModal } from "../StickerShopModal";

export interface IProduct {
  id: string;
  icon: number;
  nickname: string;
  width: string;
  height: string;
  comment: string;
}

export function StickerShop() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [basket, setBasket]: any = useState([]);

  const history = useHistory();

  const addToBasket = (
    iconId: number,
    nickname: string,
    width: string,
    height: string,
    comment: string
  ) => {
    const newProduct: IProduct = {
      id: Math.random().toString(36).substr(2, 9),
      icon: iconId,
      nickname: nickname,
      width: width,
      height: height,
      comment: comment,
    };
    setBasket([...basket, newProduct]);
    console.log(basket);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onBtnClick = () => {
    history.push("/sticker-shop/bascket");
  };

  return (
    <div className={styles.stickerShop}>
      <div className={styles.shopHeading}>
        <div>Buy my Sticker on your car.</div>
        <div className={styles.bascket} onClick={onBtnClick}>
          <div className={styles.basketCount}>{basket.length}</div>
        </div>
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
      {isModalVisible ? (
        <StickerShopModal toggleModal={toggleModal} addToBasket={addToBasket} />
      ) : null}
    </div>
  );
}
