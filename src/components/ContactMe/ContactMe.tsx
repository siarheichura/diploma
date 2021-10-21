import styles from "./ContactMe.module.css";

export function ContactMe() {
  return (
  <div className={styles.contactMe}>
    <h2 className={styles.title}>
      Let’s talk.
      <div className={styles.bigText}>Contact Me.</div>
    
    </h2>
    <p className={styles.text}>Job offers, new projects, freelance inquiry or even a cup of coffee.</p>
    <input type="text" />
    <input type="text" />
    <textarea></textarea>
    <button>Send Message</button>
  </div>
  )
}
