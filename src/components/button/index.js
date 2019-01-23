import styled, { css } from 'styled-components';

export const Button = styled.button`${({ theme }) => css`
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${theme.dark};
  color: ${theme.secondary};
  outline: none;
  margin: 10px;

  &:hover {
    opacity: 0.8;
  }
`}`;
