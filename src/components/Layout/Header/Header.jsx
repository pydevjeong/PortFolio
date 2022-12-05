import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSolution,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import styles from "./Header.module.css";

import { Animated } from "react-animated-css";

import ModalPage from "../../Modal/ModalPage";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const appTitle = title;
  const navigate = useNavigate();
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false);

  const navigateHandler = () => {
    navigate('/project')
  };
  const showEmailModal = () => {
    setModalOpen(true);
  };
  const openGithub = () => {
    window.open("https://github.com/pydevjeong");
  };
  const openBlog = () => {
    window.open("https://pro-train.tistory.com/");
  };

  return (
    <div className={styles.container}>
      {location.pathname!=='/' ? <AiOutlineArrowLeft  onClick={navigateHandler} className={styles.icons_back} size={60} /> : ''}
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
          size={40}
          onClick={openGithub}
        />
        <p onClick={openGithub}>GitHub</p>
        <AiOutlineMail
          className={styles.icons}
          size={40}
          onClick={showEmailModal}
        />
        {modalOpen && <ModalPage setModalOpen={setModalOpen} />}
        <p onClick={showEmailModal}>Email</p>
        <AiOutlineSolution
          className={styles.icons}
          size={40}
          // height 줄이기
          onClick={openBlog}
        />
        <p onClick={openBlog}>Blog</p>
      </Animated>
    </div>
  );
};

export default Header;
