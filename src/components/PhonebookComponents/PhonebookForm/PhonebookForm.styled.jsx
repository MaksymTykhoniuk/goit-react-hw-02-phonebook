import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Btn = styled.button`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #e0a96d;
  color: #e0a96d;
  background-color: transparent;
  transition: scale 250ms linear;

  :hover,
  :focus {
    scale: 1.1;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid #ddc3a5;
  outline: none;
  font-weight: bold;
  background-color: transparent;
  color: #e0a96d;

  ::placeholder {
    color: #ddc3a5;
  }
`;
