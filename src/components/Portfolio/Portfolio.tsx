import Slider from "react-slick";

import styles from "./Portfolio.module.css";

import projectList from "../../assets/projects.json";

export function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.portfolio}>
      <h3>My Protfolio.</h3>
      <div className={styles.slider}>
        <Slider {...settings}>
          {projectList.map((project) => {
            return (
              <div className={styles.slide}>
                <div
                  className={styles.slide}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${project.img}) no-repeat center center`,
                    backgroundSize: "cover",
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                  <div className={styles.slideInfo}>
                    <p className={styles.slideTech}>
                      {project.technologies.join(", ")}
                    </p>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
