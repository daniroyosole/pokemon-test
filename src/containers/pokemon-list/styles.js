import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  padding: 0px;
`;

export const ListContainer = styled.div`
  height: 400px;
  max-height: calc(100% - 200px);
  overflow: auto;
  width: 100%;
`;

export const ListItem = styled.div`
  cursor: pointer;
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
