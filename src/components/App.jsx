import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const optionsArr = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = name => {
    if (name === 'good') {
      setGood(prev => prev + 1);
    } else if (name === 'neutral') {
      setNeutral(prev => prev + 1);
    } else {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions options={optionsArr} onLeaveFeedback={onLeaveFeedback} />
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export default App;
