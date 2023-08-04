// DrinkCardStyles.js

import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  margin-bottom: 20px;
  border: none;
  width: 254px;
  height: 354px;
  border-radius: 0%;
  background: #212121;
  box-shadow: 10px 10px 30px rgb(25, 25, 25),
              -10px -10px 30px rgb(60, 60, 60);
`;

export const DrinkImage = styled(Card.Img)`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

export const DrinkTitle = styled(Card.Title)`
  font-size: 18px;
  font-weight: bold;
  color: #999
`;

export const DrinkPrice = styled(Card.Subtitle)`
  font-size: 14px;
  color: #999
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const RecipeButton = styled(Button)`
background-color: salmon; /* Replace with your desired color */
color: #FFF; /* Replace with your desired color */
border-color: #000; /* Replace with your desired color */
border-bottom-width: 4px;
font-weight: medium;
overflow: hidden;
position: relative;
padding: 8px 16px;
border-radius: 0.375rem;
transition-duration: 300ms;

&:hover {
  brightness: 150;
  border-top-width: 4px;
  border-bottom-width: 0;
}

&:active {
  opacity: 0.75;
}

&:focus {
  outline: none;
}
`;

export const AddToCartButton = styled(Button)`
background-color: lighblue; /* Replace with your desired color */
color: #FFF; /* Replace with your desired color */
border-color: #000; /* Replace with your desired color */
border-bottom-width: 4px;
font-weight: medium;
overflow: hidden;
position: relative;
padding: 8px 16px;
border-radius: 0.375rem;
transition-duration: 300ms;

&:hover {
  brightness: 150;
  border-top-width: 4px;
  border-bottom-width: 0;
}

&:active {
  opacity: 0.75;
}

&:focus {
  outline: none;
}
`;
