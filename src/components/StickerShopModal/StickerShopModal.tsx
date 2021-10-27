import { useState } from "react";
import styles from "./StickerShopModal.module.css";

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
}

export function StickerShopModal({ toggleModal }: IProps) {
  const [instaNick, setInstaNick] = useState("");
  const [instaLogo, setInstaLogo] = useState(instaLogos[0].logo);
  const [isSelectVisible, setIsSelectVisible] = useState(false);

  // let isVisible: boolean = false;

  const onInstaNickChange = (event: any) => {
    setInstaNick(event.target.value);
  };

  const showSelect = (event: any) => {
    setIsSelectVisible(!isSelectVisible);
  };

  const selectInstaLogo = (event: any, logo: any) => {
    setInstaLogo(logo.logo);
    console.log(logo);
    console.log(event.target);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.closeBtn} onClick={toggleModal}></div>
      <h3 className={styles.title}>Sticker with your instanick.</h3>
      <div className={styles.result}>
        <img className={styles.resultLogo} src={instaLogo} alt="instaLogo" />
        <p className={styles.resultNick}>{instaNick}</p>
      </div>
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
        <label className={styles.dropLabel}>choose icon</label>
        <div className={styles.iconDrop}>
          <img src={instaLogo} alt="instaLogo" />
          <div onClick={showSelect}></div>
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
      <button onClick={toggleModal}>Add to Basket</button>
    </div>
  );
}
