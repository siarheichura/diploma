import styles from "./BackgroundIcons.module.css";

export interface IProps {
  x: number;
  y: number;
}

export function BackgroundIcons({ x, y }: IProps) {
  return (
    <div>
      <div
        className={`${styles.backgroundIcon} ${styles.airplane}`}
        style={{
          transform: `translateX(${x * -0.5}px) translateY(${y * 0.5}px)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.alien}`}
        style={{
          transform: `translateX(${x}px) translateY(${y}px) rotate(30deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.ball}`}
        style={{
          transform: `translateX(${x * 0.3}px) translateY(${
            y * -0.3
          }px) rotate(70deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.bug}`}
        style={{
          transform: `translateX(${x * -0.6}px) translateY(${
            y * 0.2
          }px) rotate(120deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.cat}`}
        style={{
          transform: `translateX(${x * 0.2}px) translateY(${
            y * -0.1
          }px) rotate(340deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.dog}`}
        style={{
          transform: `translateX(${x * 0.2}px) translateY(${
            y * -0.1
          }px) rotate(20deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.fish}`}
        style={{
          transform: `translateX(${x * -0.8}px) translateY(${
            y * 1
          }px) rotate(37deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.man}`}
        style={{
          transform: `translateX(${x * 1.2}px) translateY(${
            y * 0.4
          }px) rotate(10deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.skull}`}
        style={{
          transform: `translateX(${x * 1.2}px) translateY(${
            y * -0.4
          }px) rotate(15deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.sun}`}
        style={{
          transform: `translateX(${x * -1.3}px) translateY(${y * -0.4}px)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.glass}`}
        style={{
          transform: `translateX(${x * -0.1}px) translateY(${
            y * 1.4
          }px) rotate(-10deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.heart}`}
        style={{
          transform: `translateX(${x * 1.1}px) translateY(${
            y * -0.4
          }px) rotate(-10deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.light}`}
        style={{
          transform: `translateX(${x * -0.1}px) translateY(${
            y * 1.4
          }px) rotate(-10deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.umbrella}`}
        style={{
          transform: `translateX(${x * -0.1}px) translateY(${
            y * 1.4
          }px) rotate(-10deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.ship}`}
        style={{
          transform: `translateX(${x * 0.9}px) translateY(${
            y * -1.4
          }px) rotate(-10deg)`,
        }}
      ></div>
      <div
        className={`${styles.backgroundIcon} ${styles.anchor}`}
        style={{
          transform: `translateX(${x * -0.2}px) translateY(${
            y * 0.2
          }px) rotate(-10deg)`,
        }}
      ></div>
    </div>
  );
}
