import styled from '@emotion/styled';

export const Name = styled.p`
  width: 150px;
  color: #f6ead4;
`;

export const PhoneNumber = styled.span`
  color: #f6ead4;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const Btn = styled.a`
  cursor: pointer;
  color: #e0a96d;
  transition: scale 250ms linear;

  :hover,
  :focus {
    scale: 1.1;
  }
`;
