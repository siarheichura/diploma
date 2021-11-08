import styles from "./StickerBasket.module.css";

import { InstaResult } from "../InstaResult";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../shared/Button";
import { ACTIONS } from "../../../redux/contants";

export function StickerBasket() {
  const basket = useSelector((state: any) => state.basket.basket);
  const dispatch = useDispatch();

  const tgBotData = {
    botToken: "2069403715:AAFZ-0LpT7i2L0sqjNOsw7ccsChvJK93_Lo",
    chatId: -463402438,
  };

  const sendMessage = () => {
    let { botToken, chatId } = tgBotData;
    basket.forEach((item: any) => {
      let message = `<b>Name:</b> ${item.stickerName}%0A<b>icon:</b> ${item.icon}%0A<b>nickname:</b> ${item.nickname}%0A<b>carBrand:</b> ${item.carBrand}%0A<b>phoneNum:</b> ${item.phoneNum}%0A<b>adText:</b> ${item.adText}%0A<b>width:</b> ${item.width}%0A<b>height:</b> ${item.height}%0A<b>color:</b> ${item.color}%0A<b>comment:</b> ${item.comment}%0A<b>count:</b> ${item.count}%0A<b>price:</b> ${item.price}`;
      let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`;
      fetch(url);
    });
  };

  const deleteItem = (id: any) => {
    dispatch({ type: ACTIONS.DELETE_STICKER, id });
  };

  return (
    <>
      {basket.length ? (
        <div>
          <div className={styles.basketHeading}>
            <Button text="Buy All!" onClick={sendMessage} />
          </div>
          <div className={styles.body}>
            {basket.map((sticker: any) => {
              return (
                <div className={styles.basketItem}>
                  {sticker.icon ? (
                    <InstaResult
                      instaLogo={sticker.icon}
                      instaNick={sticker.nickname}
                      size="small"
                    />
                  ) : null}

                  {sticker.stickerName ? (
                    <div style={{ fontSize: "16px", marginBottom: "5px" }}>
                      {sticker.stickerName}
                    </div>
                  ) : null}

                  {sticker.phoneNum ? (
                    <div>
                      <div>{sticker.carBrand}</div>
                      <div>{sticker.phoneNum}</div>
                    </div>
                  ) : null}

                  {sticker.adText ? <div>{sticker.adText}</div> : null}
                  {sticker.width && sticker.height ? (
                    <div className={styles.stickerSize}>
                      {sticker.width}x{sticker.height} cm
                    </div>
                  ) : null}

                  <div>{sticker.color}</div>
                  <div className={styles.stickerCount}>
                    {sticker.count} pieces
                  </div>
                  <div className={styles.stickerComment}>{sticker.comment}</div>
                  <div className={styles.stickerPrice}>{sticker.price} BYN</div>
                  <div
                    className={styles.closeBtn}
                    onClick={() => deleteItem(sticker.id)}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 style={{ fontSize: "30px", width: "100%", textAlign: "center" }}>
          Empty :(
        </h1>
      )}
    </>
  );
}
