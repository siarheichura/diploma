import { useState } from "react";
import { useHistory } from "react-router";

import styles from "./StickerShopPage.module.css";

import { StickerInstaModal } from "../StickerInstaModal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/contants";

export interface ISticker {
  id: string;
  icon: string;
  nickname: string;
  width: string;
  height: string;
  comment: string;
  count: number;
  price: number;
  color: string;
}

export const basket: ISticker[] = [];

export function StickerShopPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const basket = useSelector((state: RootStateOrAny) => state.basket.basket);
  const [isModalVisible, setModalVisible] = useState(false);

  const addStickerToBasket = (newSticker: any) => {
    dispatch({ type: ACTIONS.ADD_STICKER, newSticker });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onBasketButtonClick = () => {
    history.push("/sticker-shop/bascket");
  };

  return (
    <div className={styles.stickerShop}>
      <div className={styles.shopHeading}>
        <div>Buy Stickers on your car.</div>
        <div className={styles.bascket} onClick={onBasketButtonClick}>
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
          <div className={`${styles.shopItem} ${styles.users}`}>
            Tvoi Variantik
          </div>
        </div>
      </div>
      {isModalVisible ? (
        <StickerInstaModal
          toggleModal={toggleModal}
          addStickerToBasket={addStickerToBasket}
        />
      ) : null}
    </div>
  );
}
