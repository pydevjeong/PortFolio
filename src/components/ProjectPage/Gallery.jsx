import React from "react";
import GalleryThreeD from "./GalleryThreeD";
import styles from "./Gallery.module.css";
import {AiFillHome,AiOutlineArrowLeft} from 'react-icons/ai'


const Gallery = () => {
  
  return (
    <div className={styles.gallery_container}>
      <div className={styles.left_box}>
        <GalleryThreeD />
      </div>
      <div className={styles.right_box}>
        <div className={styles.icons_container}>
          <AiFillHome onClick={()=>location.replace('/')} className={styles.main_icons}/>
          <span>Go to Main</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
