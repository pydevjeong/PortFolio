import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSolution,
} from "react-icons/ai";
import styles from "./Header.module.css";

import { Animated } from "react-animated-css";

import Modal from "react-modal";
import ModalPage from "../../Modal/ModalPage";

const Header = ({ title }) => {
  const appTitle = title;
  const [modalOpen, setModalOpen] = useState(false);
  const showEmailModal = () => {
    setModalOpen(true);
  };
  const openGithub = () => {
    window.open("https://github.com/pydevjeong");
  };
  const openBlog = () => {
    window.open("https://pro-train.tistory.com/");
  };
  console.log(appTitle);
  return (
    <div className={styles.container}>
      <Animated animationIn="bounceInLeft" className={styles.title_container}>
        <h1>{appTitle}</h1>
      </Animated>
      <Animated
        className={styles.icons_container}
        animationIn="bounceInDown"
        animationInDuration={3000}
      >
        <AiOutlineGithub
          className={styles.icons}
          size={70}
          onClick={openGithub}
        />
        <p onClick={openGithub}>GitHub</p>
        <AiOutlineMail
          className={styles.icons}
          size={70}
          onClick={showEmailModal}
        />
        {modalOpen && <ModalPage setModalOpen={setModalOpen} />}
        <p onClick={showEmailModal}>Email</p>
        <AiOutlineSolution
          className={styles.icons}
          size={70}
          onClick={openBlog}
        />
        <p onClick={openBlog}>Blog</p>
      </Animated>
    </div>
  );
};

export default Header;
