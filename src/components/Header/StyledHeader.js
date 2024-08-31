import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = styled.header`
  padding: 20px;
  background: radial-gradient(circle, #ffd9006e 0%, #ff0000aa 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #e0e0e0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #343a40;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: darkred;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  &:hover {
    background-color: red;
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-top: 5px;
  font-size: 1rem;
  color: lightgray;
align-items: center;
`;

export const WelcomeMessage = styled.div`
  margin-top: 10px;
  color: #343a40;
`;

export const CartUser = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
