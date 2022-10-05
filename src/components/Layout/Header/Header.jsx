import React from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSolution,
} from "react-icons/ai";
import styles from "./Header.module.css";

import { Animated } from "react-animated-css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Animated className={styles.icons_container}
      animationIn="bounceInDown" animationInDuration={3000}
      >
          <AiOutlineGithub className={styles.icons} size={70} />
          <p>GitHub</p>
          <AiOutlineMail className={styles.icons}size={70} />
          <p>Email</p>
          <AiOutlineSolution className={styles.icons} size={70} />
          <p>Blog</p>
      </Animated>
    </div>
  );
};

export default Header;
