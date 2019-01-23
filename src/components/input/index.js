import styled, { css } from 'styled-components';

export const Input = styled.input`${({
  fontSize,
  errored,
  theme,
}) => css`
  height: 25px;
  font-size: ${fontSize || 16}px;
  border: none;
  transition: 0.3s all;
  border-bottom: ${errored ? '3px' : '1px'} solid ${errored ? theme.error : theme.dark};
  background-color: ${theme.primary};
  color: ${theme.dark};
  outline: none;
  margin: 10px;
  padding: 5px;

  &::-webkit-input-placeholder {
    color: ${theme.dark};
    opacity: 0.7;
  }
`} `;
