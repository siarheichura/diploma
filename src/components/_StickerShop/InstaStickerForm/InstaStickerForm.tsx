import styles from "./InstaStickerForm.module.css";

import { InstaResult } from "../InstaResult";
import { ILogo, instaLogos } from "../../../assets/instaLogos";
import { ISticker } from "../StickerShopPage/StickerShopPage";
import { StickerCounter } from "../../shared/StickerCounter";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

interface IProps {
  addStickerToBasket: (newSticker: ISticker) => void;
  toggleModal: any;
}

export function InstaStickerForm({ addStickerToBasket, toggleModal }: IProps) {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [instaNick, setInstaNick] = useState("your_nickname");
  const [instaLogo, setInstaLogo] = useState(instaLogos[0].logo);
  const [stickerWidth, setStickerWidth] = useState("");
  const [stickerHeight, setStickerHeight]: any = useState("");
  const [stickerComment, setStickerComment] = useState("");
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(3);
  const [color, setColor] = useState("");

  const onAddButtonClick = () => {
    const newSticker: ISticker = {
      id: Math.random().toString(36).substr(2, 9),
      icon: instaLogo,

      nickname: instaNick,
      width: stickerWidth,
      height: stickerHeight,
      comment: stickerComment,
      count: counter,
      price: price,
      color: color,
    };

    addStickerToBasket(newSticker);
    toggleModal();
  };

  const onInstaNickFocus = () => {
    setInstaNick("");
  };

  const onInstaNickChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInstaNick(event.target.value);
  };

  const onStickerWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    let width = event.target.value;
    let height = Math.round(+width / 2.29);
    setStickerWidth(width);
    setStickerHeight(height);
  };

  const onCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStickerComment(event.target.value);
  };

  const showSelect = () => {
    setIsSelectVisible(!isSelectVisible);
  };

  const selectInstaLogo = (event: MouseEvent<HTMLElement>, logo: ILogo) => {
    setInstaLogo(logo.logo);
    setIsSelectVisible(!isSelectVisible);
  };

  useEffect(() => {
    setPrice(counter * 3);
  }, [counter]);

  const incrementStickerCounter = () => {
    setCounter(counter + 1);
  };
  const decrementStickerCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={styles.instaForm}>
      <h3 className={styles.title}>Sticker with your instanick.</h3>
      <InstaResult instaLogo={instaLogo} instaNick={instaNick} size="big" />
      <div className={styles.instaInfo}>
        <div className={styles.instaNick}>
          <label>your instagram nickname</label>
          <input
            type="text"
            value={instaNick}
            onChange={onInstaNickChange}
            onFocus={onInstaNickFocus}
          />
        </div>
        <div className={styles.instaWidth}>
          <label>width,cm</label>
          <input
            type="text"
            value={stickerWidth}
            onChange={onStickerWidthChange}
          />
        </div>
        <div className={styles.instaHeight}>
          <label>height,cm</label>
          <input type="text" value={stickerHeight ? stickerHeight : ""} />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>color</label>
          <select
            className={styles.instaColorSelect}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          >
            <option value="select color">Select color</option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="gold">gold</option>
            <option value="silver">silver</option>
          </select>
        </div>
      </div>

      <div className={styles.instaComment}>
        <label>submit your wishes</label>
        <input type="text" value={stickerComment} onChange={onCommentChange} />
      </div>

      <div className={styles.modalFooter}>
        <StickerCounter
          stickerCounter={counter}
          incrementStickerCounter={incrementStickerCounter}
          decrementStickerCounter={decrementStickerCounter}
        />
        <div className={styles.modalPrice}>{price} BYN</div>
        <button className={styles.modalButton} onClick={onAddButtonClick}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}
