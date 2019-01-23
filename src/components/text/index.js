import styled, { css } from 'styled-components';

export const Text = styled.span`${({
  width,
  fontSize,
  fontColor,
  bold,
  marginBottom,
  textAlign,
  theme,
}) => css`
  width: ${width || 'auto'};
  font-size: ${fontSize || 16}px;
  font-weight: ${bold ? 600 : 100};
  color: ${fontColor || theme.dark};
  margin-bottom: ${marginBottom || 0}px;
  text-align: ${textAlign || 'left'};
`}`;
