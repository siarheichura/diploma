import styles from "./StickerShopModal.module.css";

export function StickerShopModal() {
    return (
        <div className={styles.modal}>
            <div className={styles.closeBtn}>x</div>
            <h3 className={styles.title}>Sticker with your instanick.</h3>
            <div className={styles.result}>Здесь будет динамический результат</div>
            <input className={styles.modalInput} type="text" placeholder='enter your nick' />
            <div className={styles.stickerSize}>
                <input type="text" placeholder='width' />
                <input type="text" placeholder='height (вычисляется)' />
                <select className={styles.stickerSelect}>
                    <option value="">Variants</option>
                    <option value="">OF</option>
                    <option value="">InsaIcons</option>
                </select>
            </div>
            <button>Add to Basket</button>
        </div>
    )
}