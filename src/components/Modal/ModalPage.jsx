import React from 'react';
import styles from './ModalPage.module.css'
import {AiOutlineClose} from 'react-icons/ai'
const ModalPage = ({setModalOpen}) => {
  
  console.log(setModalOpen);
  const closeModal=()=>{
    setModalOpen(false);
  }
  return (
    <div className={styles.modal_container}>
      <p onClick={closeModal}>surtrcode@gmail.com</p>
    </div>
  );
};

export default ModalPage;