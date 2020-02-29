import React from 'react';
import styles from '.HappyHourAd.scss';

class HappyHourAd extends React.Component {
  render() {
    return <div className={styles.component}>
      <div className={styles.component}>
        <h3 className={styles.title}></h3>
        <div className={styles.promoDescription}></div>
      </div>
    </div>;
  }
}

export default HappyHourAd;
