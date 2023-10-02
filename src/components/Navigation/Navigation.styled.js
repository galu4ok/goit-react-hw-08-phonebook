import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    border-radius: 4px;
    color: black;
    font-weight: 700;
    display: flex;
    align-items: center;

    &:hover {
      color: #a0a0a0;
    }
    &.active,
    &:focus {
      color: #a8329b;
    }
  }
`;
