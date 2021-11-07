import { Button } from "../../shared/Button";
import styles from "./UploadFileForm.module.css";

export function UploadFileForm() {
  const onAddButtonClick = () => {};
  return (
    <div className={styles.uploadForm}>
      <div className={styles.bigText}>IN DEV</div>
      <h3 className={styles.title}>
        you can upload your version in .jpg, .png format
      </h3>

      <input type="file" />

      <div className={styles.item}>
        <label>submit your wishes</label>
        <input type="text" />
      </div>
      <Button text="Add to basket" onClick={onAddButtonClick} />
    </div>
  );
}
