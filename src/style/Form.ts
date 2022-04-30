import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-bottom: 2rem;

  & label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & legend {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: 700;
  }
`;
