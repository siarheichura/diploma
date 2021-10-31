import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";

import styles from "./RootRouter.module.css";

import { MainPage } from "../components/MainPage";
import { Portfolio } from "../components/Portfolio";
import { StickerShop } from "../components/StickerShop";
import { MyInfoModal } from "../components/MyInfoModal";
import { Bascket } from "../components/Bascket";

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
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/my-info"
            >
              Contact Me
            </NavLink>
            <NavLink
              className={`${styles.navLink} ${styles.stickers}`}
              activeClassName={styles.activeNavLink}
              to="/sticker-shop"
            >
              My Sticker Shop
            </NavLink>
            <div className={styles.themeSwitcher}></div>
          </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/my-info">
            <MyInfoModal />
          </Route>
          <Route exact path="/sticker-shop">
            <StickerShop />
          </Route>
          <Route exact path="/sticker-shop/bascket">
            <Bascket />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
