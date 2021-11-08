import { ChangeEvent, useState } from "react";
import styles from "./ContactMe.module.css";
import validator from "validator";

export function ContactMe() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputMessageValue, setInputMessageValue] = useState("");
  const [confirmMsgVisible, setConfirmMsgVisible] = useState(false);
  const [errorMsgVisible, setErrorMsgVisible] = useState(false);

  const tgBotData = {
    botToken: "2069403715:AAFZ-0LpT7i2L0sqjNOsw7ccsChvJK93_Lo",
    chatId: -463402438,
  };

  const sendMessage = () => {
    if (
      validator.isEmail(inputEmailValue) &&
      inputNameValue &&
      inputMessageValue
    ) {
      let { botToken, chatId } = tgBotData;
      let message = `<b>Name:</b> ${inputNameValue}%0A<b>Email:</b> ${inputEmailValue}%0A<b>Message:</b> ${inputMessageValue}`;
      let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`;
      fetch(url);
      setInputNameValue("");
      setInputEmailValue("");
      setInputMessageValue("");
      setConfirmMsgVisible(true);
      setTimeout(() => {
        setConfirmMsgVisible(false);
      }, 3000);
    } else {
      setErrorMsgVisible(true);
      setTimeout(() => {
        setErrorMsgVisible(false);
      }, 2000);
    }
  };

  const onInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(event.target.value);
    console.log(inputNameValue);
  };
  const onInputEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(event.target.value);
  };
  const onInputMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
        *Name
        <input
          type="text"
          value={inputNameValue}
          onChange={onInputNameChange}
        />
      </label>
      <label>
        *E-mail
        <input
          type="text"
          value={inputEmailValue}
          onChange={onInputEmailChange}
        />
      </label>
      <label>
        *Message
        <textarea
          value={inputMessageValue}
          onChange={onInputMessageChange}
        ></textarea>
      </label>
      <div className={styles.footer}>
        <button onClick={sendMessage}>Send Message</button>
        {confirmMsgVisible ? <div>Thanks 😙</div> : null}
        {errorMsgVisible ? <div>Incorrect data 😠</div> : null}
      </div>
    </div>
  );
}
