import { useState } from "react";

import styles from "./StickerShopModal.module.css";

import { InstaResult } from "../InstaResult";

import logo1 from "../../assets/images/instaLogos/insta1.png";
import logo2 from "../../assets/images/instaLogos/insta2.png";
import logo3 from "../../assets/images/instaLogos/insta3.png";

const instaLogos = [
  { id: 1, logo: logo1 },
  { id: 2, logo: logo2 },
  { id: 3, logo: logo3 },
];

interface IProps {
  toggleModal: () => void;
  addToBasket: (
    iconId: number,
    nickname: string,
    width: string,
    height: string,
    comment: string
  ) => void;
}

export function StickerShopModal({ toggleModal, addToBasket }: IProps) {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [instaNick, setInstaNick] = useState("");
  const [instaLogo, setInstaLogo] = useState(instaLogos[0].logo);
  const [stickerWidth, setStickerWidth] = useState("");
  const [stickerHeight, setStickerHeight] = useState("");
  const [stickerComment, setStickerComment] = useState("");

  const onBtnAddClick = () => {
    toggleModal();
    addToBasket(1, "lol", "kek", "che", "bu");
  };

  const onInstaNickChange = (event: any) => {
    setInstaNick(event.target.value);
  };

  const showSelect = (event: any) => {
    setIsSelectVisible(!isSelectVisible);
  };

  const selectInstaLogo = (event: any, logo: any) => {
    setInstaLogo(logo.logo);
  };

  return (
    <div className={styles.instaModal}>
      <div className={styles.closeBtn} onClick={toggleModal}></div>
      <h3 className={styles.title}>Sticker with your instanick.</h3>
      <InstaResult instaLogo={instaLogo} instaNick={instaNick} />
      <div className={styles.instaInfo}>
        <div className={styles.instaNick}>
          <label>your instagram nickname</label>
          <input type="text" value={instaNick} onChange={onInstaNickChange} />
        </div>
        <div className={styles.instaWidth}>
          <label>width,cm</label>
          <input type="text" />
        </div>
        <div className={styles.instaHeight}>
          <label>height,cm</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.instaDropdown}>
        <div className={styles.dropHead}>
          <label className={styles.dropLabel}>icon</label>
          <div className={styles.iconDrop}>
            <img src={instaLogo} alt="instaLogo" />
            <div onClick={showSelect}></div>
          </div>
        </div>

        {isSelectVisible ? (
          <div className={styles.instaDropList}>
            {instaLogos.map((logo, index) => {
              return (
                <img
                  key={index}
                  src={logo.logo}
                  alt="instaLogo"
                  onClick={(event) => selectInstaLogo(event, logo)}
                />
              );
            })}
          </div>
        ) : null}
      </div>

      <div className={styles.instaComment}>
        <label>submit your wishes</label>
        <input type="text" />
      </div>
      <button onClick={onBtnAddClick}>Add to Basket</button>
    </div>
  );
}
