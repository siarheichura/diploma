import { useState } from "react";
import styles from "./ContactMe.module.css";

export function ContactMe() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputMessageValue, setInputMessageValue] = useState("");

  const tgBotData = {
    botToken: "2069403715:AAFZ-0LpT7i2L0sqjNOsw7ccsChvJK93_Lo",
    chatId: -463402438,
  };

  const sendMessage = () => {
    let { botToken, chatId } = tgBotData;
    let message = `<b>Name:</b> ${inputNameValue}%0A<b>Email:</b> ${inputEmailValue}%0A<b>Message:</b> ${inputMessageValue}`;
    // <b>Email:</b> <i>${inputEmailValue}</i>. %0A
    // <b>Message:</b> <i>${inputMessageValue}</i>.`
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`;
    fetch(url);
    setInputNameValue("");
    setInputEmailValue("");
    setInputMessageValue("");
  };

  const onInputNameChange = (event: any) => {
    setInputNameValue(event.target.value);
    console.log(inputNameValue);
  };
  const onInputEmailChange = (event: any) => {
    setInputEmailValue(event.target.value);
  };
  const onInputMessageChange = (event: any) => {
    setInputMessageValue(event.target.value);
  };

  return (
    <div className={styles.contactMe}>
      <h2 className={styles.title}>
        Let’s talk.
        <div className={styles.bigText}>Contact Me.</div>
      </h2>
      <p className={styles.text}>
        Job offers, new projects, freelance inquiry or even a cup of coffee.
      </p>
      <label>
        Name
        <input
          type="text"
          value={inputNameValue}
          onChange={onInputNameChange}
        />
      </label>
      <label>
        E-mail
        <input
          type="text"
          value={inputEmailValue}
          onChange={onInputEmailChange}
        />
      </label>
      <label>
        Message
        <textarea
          value={inputMessageValue}
          onChange={onInputMessageChange}
        ></textarea>
      </label>

      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
