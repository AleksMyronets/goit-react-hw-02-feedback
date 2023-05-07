import React, { useState } from 'react';
import FeedbackWidget from './components/FeedbackWidget/FeedbackWidget';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div>
      <h1>Feedback Widget</h1>
      <FeedbackWidget good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
    </div>
  );
};

export default App;
