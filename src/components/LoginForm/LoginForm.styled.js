import styled from 'styled-components';

export const LogForm = styled.form`
  width: 500px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const LogButton = styled.button`
  width: 120px;
  height: 30px;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
