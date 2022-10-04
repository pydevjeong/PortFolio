import React from "react";
import ThreeDPage from "../Three/ThreeDPage";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Hi, I'm Hun</h1>
      <div className={styles.goal_container}>
        <h2 className={styles.goal}>Goal : Full-Stack Developer</h2>
      </div>
      <div className={styles.info_three}>
        <div className={styles.info}>
          <span>I’m interested in I aim to be a Full-Stack Develospaner</span>
          <span>I have a passion for learning something interested in</span>
          <span>I graduated in IT Software, and my primary tech is JavaScript.</span>
          <span>I want to make something new and unique things.</span>
          <span>Please, contact me if you are interested.</span>
        </div>
        <div className={styles.threeD}>
          <ThreeDPage/>
        </div>
      </div>

    </div>
  );
};

export default Main;
