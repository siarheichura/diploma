import { useState } from "react";
import { useHistory } from "react-router";

import styles from "./StickerShopPage.module.css";

import { InstaStickerForm } from "../InstaStickerForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../../redux/contants";
import { StickerShopModal } from "../StickerShopModal";
import { UploadFileForm } from "../UploadFileForm";
import { CallStickerForm } from "../CallStickerForm";
import { WindowStickerForm } from "../WindowStickerForm";

export interface ISticker {
  id: string;
  icon?: string;
  iconId?: number;
  nickname?: string;
  carBrand?: string;
  phoneNum?: string;
  adText?: string;
  width?: string;
  height?: string;
  color: string;
  comment: string;
  count: number;
  price: number;
}

export const basket: ISticker[] = [];

export function StickerShopPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const basket = useSelector((state: RootStateOrAny) => state.basket.basket);
  const [isModalVisible, setModalVisible] = useState(false);
  const [instaModalVisibility, setInstaModalVisibility] = useState(false);
  const [callModalVisibility, setCallModalVisibility] = useState(false);
  const [windowModalVisibility, setWindowModalVisibility] = useState(false);
  const [yourModalVisibility, setYourModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setInstaModalVisibility(false);
    setCallModalVisibility(false);
    setWindowModalVisibility(false);
    setYourModalVisibility(false);
  };

  const onInstaCardClick = () => {
    setInstaModalVisibility(!instaModalVisibility);
    setModalVisible(true);
  };
  const onCallCardClick = () => {
    setCallModalVisibility(!callModalVisibility);
    setModalVisible(!isModalVisible);
  };
  const onWindowCardClick = () => {
    setWindowModalVisibility(!windowModalVisibility);
    setModalVisible(!isModalVisible);
  };
  const onYourCardClick = () => {
    setYourModalVisibility(!yourModalVisibility);
    setModalVisible(!isModalVisible);
  };

  const setAllFormInvisible = () => {
    setInstaModalVisibility(false);
    setCallModalVisibility(false);
    setWindowModalVisibility(false);
    setYourModalVisibility(false);
  };

  const addStickerToBasket = (newSticker: any) => {
    dispatch({ type: ACTIONS.ADD_STICKER, newSticker });
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
        <div className={styles.itemWrap} onClick={onInstaCardClick}>
          <div className={`${styles.shopItem} ${styles.insta}`}>
            instagram nickname
          </div>
        </div>
        <div className={styles.itemWrap} onClick={onCallCardClick}>
          <div className={`${styles.shopItem} ${styles.call}`}>call me</div>
        </div>
        <div className={styles.itemWrap} onClick={onWindowCardClick}>
          <div className={`${styles.shopItem} ${styles.window}`}>
            rear window advertisement
          </div>
        </div>
        <div className={styles.itemWrap} onClick={onYourCardClick}>
          <div className={`${styles.shopItem} ${styles.users}`}>
            suggest your own version
          </div>
        </div>
      </div>
      {isModalVisible ? (
        <StickerShopModal
          toggleModal={toggleModal}
          setAllFormInvisible={setAllFormInvisible}
        >
          {instaModalVisibility ? (
            <InstaStickerForm
              addStickerToBasket={addStickerToBasket}
              toggleModal={toggleModal}
            />
          ) : null}
          {yourModalVisibility ? <UploadFileForm /> : null}
          {callModalVisibility ? (
            <CallStickerForm
              addStickerToBasket={addStickerToBasket}
              toggleModal={toggleModal}
            />
          ) : null}
          {windowModalVisibility ? (
            <WindowStickerForm
              addStickerToBasket={addStickerToBasket}
              toggleModal={toggleModal}
            />
          ) : null}
        </StickerShopModal>
      ) : null}
    </div>
  );
}
