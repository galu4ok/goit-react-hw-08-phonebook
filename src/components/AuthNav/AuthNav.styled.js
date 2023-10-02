import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 20px;
  gap: 10px;

  a {
    font-weight: 700;
    color: #2a363b;
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
