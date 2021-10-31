import Slider from "react-slick";

import styles from "./Portfolio.module.css";

const myProjects = [
  {
    name: "opensto.by",
    img: "/mockImages/opensto.jpg",
    link: "https://github.com/siarheichura/opensto.by",
    technologies: "HTML5 / CSS3 / JavaScript",
    description:
      "This landing page is made for Opensto company to attract customers. Вata from the form is sent to the telegram chat using created telegram bot",
  },
  {
    name: "Todo List",
    img: "/mockImages/todo-react.png",
    link: "https://github.com/siarheichura/ToDoList-react",
    technologies: "CSS3 / JS / ReactJS / TypeScript",
    description: "",
  },
  {
    name: "Weather app",
    img: "/mockImages/weather.png",
    link: "https://github.com/siarheichura/WeatherApp",
    technologies: "HTML5 / CSS3 / JavaScript",
    description: "",
  },
  {
    name: "Kanban board",
    img: "/mockImages/kanbanBoard.png",
    link: "https://github.com/siarheichura/KanbanBoard/tree/dev",
    technologies: "HTML5 / CSS3 / JavaScript",
    description: "",
  },
  {
    name: "Dashboard",
    img: "/mockImages/dashboard.png",
    link: "https://github.com/siarheichura/Dashboard",
    technologies: "HTML5 / CSS3 (SASS)",
    description: "",
  },
];

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
          {myProjects.map((project) => {
            return (
              <div className={styles.slide}>
                {/* <img src={project.img} alt="" /> */}
                <div
                  className={styles.slide}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${project.img}) no-repeat center center`,
                    backgroundSize: "cover",
                  }}
                >
                  <a href={project.link}>{project.name}</a>
                  <div className={styles.slideInfo}>
                    <p className={styles.slideTech}>{project.technologies}</p>
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

// https://react-slick.neostack.com/docs/api
