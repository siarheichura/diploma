import { useEffect, useState } from "react";
import { StickerCounter } from "../../shared/StickerCounter";
import { ISticker } from "../StickerShopPage/StickerShopPage";
import styles from "./CallStickerForm.module.css";

export function CallStickerForm({ addStickerToBasket, toggleModal }: any) {
  const [carBrand, setCarBrand] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [stickerWidth, setStickerWidth] = useState("");
  const [stickerHeight, setStickerHeight]: any = useState("");
  const [color, setColor] = useState("");
  const [stickerComment, setStickerComment] = useState("");
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(4);

  const onAddButtonClick = () => {
    const newSticker: ISticker = {
      stickerName: "Call sticker",
      id: Math.random().toString(36).substr(2, 9),
      carBrand: carBrand,
      phoneNum: phoneNum,
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

  const onCarBrandChange = (event: any) => {
    setCarBrand(event.target.value);
  };
  const onPhoneNumChange = (event: any) => {
    setPhoneNum(event.target.value);
  };
  const onWidthChange = (event: any) => {
    setStickerWidth(event.target.value);
  };
  const onHeightChange = (event: any) => {
    setStickerHeight(event.target.value);
  };
  const onColorChange = (event: any) => {
    setColor(event.target.value);
  };
  const onCommentChange = (event: any) => {
    setStickerComment(event.target.value);
  };

  const incrementStickerCounter = () => {
    setCounter(counter + 1);
  };
  const decrementStickerCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setPrice(counter * 4);
  }, [counter]);

  return (
    <div className={styles.callForm}>
      <h3 className={styles.title}>Sticker with your phone number.</h3>
      <div className={styles.body}>
        <div className={styles.formItem}>
          <label>your car brand</label>
          <input type="text" value={carBrand} onChange={onCarBrandChange} />
        </div>
        <div className={styles.formItem}>
          <label>your phone number</label>
          <input type="tel" value={phoneNum} onChange={onPhoneNumChange} />
        </div>

        <div className={styles.formItem}>
          <label>width</label>
          <input type="text" value={stickerWidth} onChange={onWidthChange} />
        </div>
        <div className={styles.formItem}>
          <label>height</label>
          <input type="text" value={stickerHeight} onChange={onHeightChange} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>color</label>
          <select className={styles.instaColorSelect} onChange={onColorChange}>
            <option value="select color">Select color</option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="gold">gold</option>
            <option value="silver">silver</option>
          </select>
        </div>

        <div className={styles.formItem}>
          <label>your wishes</label>
          <input
            type="text"
            value={stickerComment}
            onChange={onCommentChange}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <StickerCounter
          stickerCounter={counter}
          incrementStickerCounter={incrementStickerCounter}
          decrementStickerCounter={decrementStickerCounter}
        />
        <p> {price} BYN</p>
        <button onClick={onAddButtonClick}>Add to basket</button>
      </div>
    </div>
  );
}
