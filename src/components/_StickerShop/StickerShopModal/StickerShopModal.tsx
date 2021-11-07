import styles from "./StickerShopModal.module.css";

export interface IProps {
  toggleModal: () => void;
  setAllFormInvisible: any;
  children: any;
}

export function StickerShopModal({
  toggleModal,
  setAllFormInvisible,
  children,
}: IProps) {
  const onButtonCLoseClick = () => {
    toggleModal();
    setAllFormInvisible();
  };
  return (
    <div className={styles.modal}>
      <div className={styles.closeButton} onClick={onButtonCLoseClick}></div>
      {children}
    </div>
  );
}
