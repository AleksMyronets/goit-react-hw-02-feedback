import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackWidget.module.css';

const FeedbackWidget = ({ good, neutral, bad }) => {
  return (
    <div className={styles.feedbackWidget}>
      <div>
        <span>Good: {good}</span>
      </div>
      <div>
        <span>Neutral: {neutral}</span>
      </div>
      <div>
        <span>Bad: {bad}</span>
      </div>
    </div>
  );
};

FeedbackWidget.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackWidget;