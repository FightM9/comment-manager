import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  background-color: var(--background-color);

  & main {
    width: 100%;
    padding: 1rem;
  }
`;
