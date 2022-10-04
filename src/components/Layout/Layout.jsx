import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import ThreeDPage from './Three/ThreeDPage';
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header/>
      <Main/>
    </div>
  );
};

export default Layout;