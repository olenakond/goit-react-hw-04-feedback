import { styled } from 'styled-components';

export const Container = styled('div')(() => {
  return {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  };
});

export const Button = styled('button')(() => {
  return {
    fontSize: 16,
    textAlign: 'center',
    color: '#2e2f42',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    padding: '8px 16px',
    width: 80,
    minHeight: 40,
    border: '1px solid #e7e9fc',
    borderRadius: 4,
    boxShadow:
      '0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.12), 1px 0px 1px rgba(0, 0, 0, 0.14)',

    '&:hover, focus': {
      boxShadow: 'none',
    },
  };
});
