import styled from 'styled-components';

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  padding: 0px;
`;

export const DetailContainer = styled.div`
  height: 400px;
  overflow: auto;
  width: 100%;
`;

export const DetailItem = styled.div`
  display: flex;
`;

export const TypeItem = styled.div`
  padding-left: 5px;
`;

export const Wrapper = styled.div`
  width: auto;
  height: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || 'normal'};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Separator = styled.hr`
  width: 90%;
  border: 0.5px solid ${({ theme }) => theme.dark};
`;

export const TextLink = styled.span`
  cursor: pointer;
  font-size: 20;
  font-weight: bold;
`;

export const ErrorText = styled.span`
  font-size: 14px;
  color: red;
`;