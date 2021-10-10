import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav className={`${styles.nav} content`}>
      <a href="#" className={styles.navLogo}>
        <p>.Seriy</p>
        <p>Volk</p>
      </a>
      <ul className={styles.navList}>
        <li>
          <a href="#" className={styles.navLink}>
            About Me
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Contact Me
          </a>
        </li>
        <li className={styles.stickers}>
          <a href="#" className={styles.navLink}>
            My StickerShop
          </a>
        </li>
      </ul>
    </nav>
  );
}
