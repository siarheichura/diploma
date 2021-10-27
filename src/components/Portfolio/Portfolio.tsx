// https://react-slick.neostack.com/docs/api
import Slider from "react-slick";

import styles from "./Portfolio.module.css";

export function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.portfolio}>
      <h3>My Protfolio.</h3>
      <div className={styles.slider}>
        <Slider {...settings}>
          <div className={styles.slide}>
              <a className={styles.slideTitle} href="https://siarheichura.github.io/opensto.by/" target='_blank' rel='noopener noreferrer'>opensto.by</a>
            <div className={styles.slideInfo}>
              <p className={styles.slideTech}>HTML5 / CSS3 / JS</p>
              <p className={styles.slideDescr}>This landing page is made for Opensto company to attract customers. Telegram bot</p>
            </div>
          </div>
          <div className={styles.slide}>
              <a className={styles.slideTitle} href="https://siarheichura.github.io/opensto.by/" target='_blank' rel='noopener noreferrer'>opensto.by</a>
            <div className={styles.slideInfo}>
              <p className={styles.slideTech}>HTML5 / CSS3 / JS</p>
              <p className={styles.slideDescr}>This landing page is made for Opensto company to attract customers. Telegram bot</p>
            </div>
          </div>
        </Slider>
      </div>
    
    </div>
  )
}
