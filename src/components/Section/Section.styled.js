import { styled } from 'styled-components';

export const Container = styled('div')(() => {
  return {
    margin: '50px auto',
    width: 500,
    backgroundColor: '#f4f4fd',
    borderRadius: 4,
    padding: '20px 20px',
  };
});

export const Title = styled('h1')(() => {
  return {
    fontSize: 30,
    textAlign: 'center',
  };
});
