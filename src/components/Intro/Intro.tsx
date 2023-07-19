import React from "react";

import { IntroProps } from "./Intro.types";

import styles from "./Intro.module.scss";

const Intro: React.FC<IntroProps> = ({
  imgSrc = "https://cms.ahoy.nl/files/www.ahoy.nl/files/images/Concert2_header.jpg",
}) => {
  return (
    <div className={styles.intro}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      ></div>
      <div className={styles.info}>
        <p className={styles.subtitle}>All over the worlds</p>
        <p className={styles.headline}>Biggest music festival</p>
        <div className={styles.event}>
          <p>August 13</p>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <button>Buy tickets</button>
      </div>

      <div className={styles.goButton}>
        <button>go</button>
      </div>
    </div>
  );
};

export default Intro;
