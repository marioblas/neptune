import React from 'react';
import Helmet from 'react-helmet';
import styles from './home.scss';

const Home = () => (
  <div className={styles.home}>
    <Helmet title="Home" />
    <h1 className={styles.greeting}>Welcome to Neptune</h1>
  </div>
);

export default Home;
