import styles from "./AboutMe.module.css";

export function AboutMe() {

  return <div className={styles.aboutMe}>
    
    <h2 className={styles.title}>
      About Me.
      <div className={styles.bigText}>About Me.</div>
    </h2>
    <p className={styles.text}>
      I'm Sergei, a 26-year-old <span>Front-end developer</span>. I'm a weird guy who likes making weird things with web technologies.
      I like to <span>resolve</span> design problems, <span>create</span> smart user interface and <span>imagine</span> useful interaction, developing rich web experiences & web applications.
      When not working or futzing around with code, I study how to escape from University. Actually <span>for hire</span>.
    </p>
  </div>;
}
