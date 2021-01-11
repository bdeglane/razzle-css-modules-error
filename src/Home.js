import React from 'react';
import logo from './react.svg';

import styles from './Home.module.css';

class Home extends React.Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.Home}>
        <div className={styles.HomeHeader}>
          <img src={logo} className={styles.HomeLogo} alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className={styles.HomeIntro}>
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className={styles.HomeResources}>
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
