import React from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSolution,
} from "react-icons/ai";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons_container}>
          <AiOutlineGithub className={styles.icons} size={70} />
          <p>GitHub</p>
          <AiOutlineMail className={styles.icons}size={70} />
          <p>Email</p>
          <AiOutlineSolution className={styles.icons} size={70} />
          <p>Blog</p>
      </div>
    </div>
  );
};

export default Header;
