import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import styles from "./RootRouter.module.css";

import { MainInfo } from "../components/MainInfo";
import { AboutMe } from "../components/AboutMe";
import { Portfolio } from "../components/Portfolio";
import { ContactMe } from "../components/ContactMe";
import { StickerShop } from "../components/StickerShop";

export function RootRouter() {
  return (
    <BrowserRouter>
      <div>
        <div className={styles.nav}>
          <Link className={styles.navLogo} to="/">
            <p>.Seriy</p>
            <p>Volk</p>
          </Link>
          <nav className={styles.navList}>
            <Link className={styles.navLink} to="/about-me">
              About Me
            </Link>
            <Link className={styles.navLink} to="/portfolio">
              Portfolio
            </Link>
            <Link className={styles.navLink} to="/contact-me">
              Contact Me
            </Link>
            <Link
              className={`${styles.navLink} ${styles.stickers}`}
              to="/sticker-shop"
            >
              My Sticker Shop
            </Link>
          </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <MainInfo />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact-me">
            <ContactMe />
          </Route>
          <Route exact path="/sticker-shop">
            <StickerShop />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
