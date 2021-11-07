// import { Button } from "../shared/Button";
import { useEffect, useState } from "react";
import { StickerCounter } from "../../shared/StickerCounter";
import { ISticker } from "../StickerShopPage/StickerShopPage";
import styles from "./WindowStickerForm.module.css";

export function WindowStickerForm({ addStickerToBasket, toggleModal }: any) {
  const [color, setColor] = useState("");
  const [adText, setAdText] = useState("");
  const [stickerComment, setStickerComment] = useState("");
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(25);

  const onAddButtonClick = () => {
    const newSticker: ISticker = {
      id: Math.random().toString(36).substr(2, 9),
      adText: adText,
      comment: stickerComment,
      color: color,
      count: counter,
      price: price,
    };
    addStickerToBasket(newSticker);
    toggleModal();
  };

  useEffect(() => {
    setPrice(counter * 25);
  }, [counter]);

  const incrementStickerCounter = () => {
    setCounter(counter + 1);
  };
  const decrementStickerCounter = () => {
    setCounter(counter - 1);
  };
  // const onAddButtonClick = () => {};
  return (
    <div className={styles.windowForm}>
      <h3 className={styles.title}>
        rear window advertisement for your busines.
      </h3>
      <div className={styles.body}>
        <div className={styles.formItem}>
          <label>advertisements text</label>
          <input
            type="text"
            value={adText}
            onChange={(e) => setAdText(e.target.value)}
          />
        </div>
        <div className={styles.formItem}>
          <label>submit your wishes</label>
          <input
            type="text"
            value={stickerComment}
            onChange={(e) => setStickerComment(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>color</label>
          <select onChange={(e) => setColor(e.target.value)}>
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

      <div className={styles.footer}>
        <StickerCounter
          stickerCounter={counter}
          incrementStickerCounter={incrementStickerCounter}
          decrementStickerCounter={decrementStickerCounter}
        />
        <p> {price} BYN</p>
        <button onClick={onAddButtonClick}> add</button>
      </div>
    </div>
  );
}
