import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 20px;
  gap: 10px;
`;
export const Username = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #cd5700;
`;
export const LogOutBtn = styled.button`
  font-weight: 700;
  color: #2a363b;
  display: flex;
  align-items: center;
  border: none;

  &:hover {
    color: #a0a0a0;
  }
  &.active,
  &:focus {
    color: #a8329b;
  }
`;
