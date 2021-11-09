import React from "react";
import styles from "../styles/Intro.module.css";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>HOTDOG</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.description}>
          Creating products based on the behaviors of the targetted demographic.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Intro;
