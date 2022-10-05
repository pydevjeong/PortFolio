import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import styles from './Layout.module.css'
import ButtonLink from './Main/ButtonLink';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header/>
      <Main/>
      <ButtonLink/>
    </div>
  );
};

export default Layout;