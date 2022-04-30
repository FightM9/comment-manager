import styled from 'styled-components';

export const Aside = styled.aside`
  background-color: var(--navbar-color);
  color: white;
`;

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0;
  font-size: 1.5rem;
  & a {
      padding 1.5rem;    
      color: white;
      transition: background 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  & a:hover {
    background-color: var(--navbar-hover-color);
}

  & .active {
    background-color: var(--primary-color);
  }

  & .active:hover {
    background-color: var(--primary-hover-color);
  }
`;
