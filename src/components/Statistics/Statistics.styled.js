import { styled } from 'styled-components';

export const Container = styled('div')(() => {
  return {
    marginTop: 20,
    padding: '10px 10px 10px 40px',
    border: ' 3px outset',
  };
});

export const Title = styled('h2')(() => {
  return {
    textAlign: 'center',
  };
});

export const AdditiolStat = styled('p')(() => {
  return {
    color: '#646684',
  };
});
