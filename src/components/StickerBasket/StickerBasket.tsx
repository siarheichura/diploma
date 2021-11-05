import styles from "./StickerBasket.module.css";

// import { basket } from "../StickerShop/StickerShop";
import { InstaResult } from "../InstaResult";
import { useSelector } from "react-redux";
import { Button } from "../shared/Button";

export function StickerBasket() {
  // const basket = useSelector((state: RootStateOrAny) => state.basket.basket);
  const basket = useSelector((state: any) => state.basket.basket);

  const onButtonBuyClick = () => {
    console.log("Buy it!");
  };
  return (
    <div>
      <div className={styles.basketHeading}>
        <div>go back</div>
        {/* <button>Buy!</button> */}
        <Button text="Buy!" onClick={onButtonBuyClick} />
      </div>
      <div>
        {basket.map((sticker: any) => {
          return (
            <div>
              <div className={styles.basketItem}>
                <input type="checkbox" checked />
                <InstaResult
                  instaLogo={sticker.icon}
                  instaNick={sticker.nickname}
                  size="small"
                />

                <div className={styles.stickerSize}>
                  {sticker.width}x{sticker.height} cm
                </div>
                <div>{sticker.color}</div>
                <div className={styles.stickerCount}>
                  {sticker.count} pieces
                </div>
                <div className={styles.stickerComment}>{sticker.comment}</div>
                <div className={styles.stickerPrice}>{sticker.price} BYN</div>
                <div className={styles.closeBtn}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
