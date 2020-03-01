import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.timerID = setInterval(() =>
      this.forceUpdate(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  static propTypes = {
    title: PropTypes.node,
    promoDescription: PropTypes.node,
  };

  mockProps = {
    title: 'Happy Hour',
    promoDescription:
      'Promo time',
  };


  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(),
        12,
        0,
        0,
        0
      )
    );

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }


  render() {
    const promoCounter = this.getCountdownTime();
    return <div className={styles.component}>
      <div className={styles.component}>
        <h3 className={styles.title}>{this.mockProps.title}</h3>
        <div className={styles.countdown}>
          {promoCounter > 82800 ? this.mockProps.promoDescription : formatTime(promoCounter)}
        </div>
      </div>
    </div>;
  }
}

export default HappyHourAd;
