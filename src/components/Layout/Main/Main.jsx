import React from "react";
import styles from "./Main.module.css";
import ThreeMain from "../Three/ThreeMain";
import { Animated } from "react-animated-css";

const Main = () => {
  return (
    <div className={styles.mainCon}>
    <div className={styles.container}>
      <h1 className={styles.name}>Hi, I'm Ernest Cooper</h1>
      <div className={styles.goal_container}>
        <Animated animationIn="fadeIn">
        <span className={styles.goal}>Who Am I?</span>
        </Animated>
      </div>
      <div className={styles.info_three}>
        <div className={styles.info}>
          <span>I'm interested in I aim to be a Full-Stack Develospaner</span>
          <span>I have a passion for learning something interested in</span>
          <span>
            I graduated in IT Software, and my primary tech is JavaScript.
          </span>
          <span>I want to make something new and unique things.</span>
          <span>Please, contact me if you are interested.</span>
        </div>
      </div>
    </div>
    <div className={styles.threeD}>
      <ThreeMain scale={100} modelPath={'imgs/test2.glb'}/>
    </div>
    </div>
  );
};

export default Main;
