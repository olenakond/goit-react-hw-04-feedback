import { Container, Title, AdditiolStat } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <Title>Statistics</Title>
      <p>Good: {good}</p>
      <p>Neutal: {neutral}</p>
      <p>Bad: {bad}</p>
      <AdditiolStat>Total: {total}</AdditiolStat>
      <AdditiolStat>Positive feedback: {positivePercentage}%</AdditiolStat>
    </Container>
  );
};

export default Statistics;
