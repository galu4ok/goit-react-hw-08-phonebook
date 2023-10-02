import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-top: 15px;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledField = styled(Field)`
  padding: 5px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const StyledError = styled(ErrorMessage)`
  font-style: italic;
  font-size: 10px;
  color: tomato;
`;
export const AddBtn = styled.button`
  width: 120px;
  height: 30px;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    background-color: teal;
    color: white;
  }
`;
