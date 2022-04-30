import styled from 'styled-components';

export const Details = styled.details`
  display: block;
  width: max-content;
  cursor: pointer;

  & summary {
    padding-bottom: 0.5rem;
    text-transform: capitalize;
  }
`;
