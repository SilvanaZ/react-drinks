import styled from 'styled-components';
import { Avatar, Button, TextField, Grid, Box, Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
  background-color: #f9f9f9;
  opacity: 75%;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

export const StyledBox = styled(Box)`
display: 'flex';
flex-direction: 'column';
align-items: 'center';
`;
export const StyledAvatar = styled(Avatar)`
  background-color: teal;
`;

export const StyledTitle = styled(Typography)`
  font-weight: bold;
  color: #333;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 16px !important;
`;

export const StyledButton = styled(Button)`
  background-color: teal;
  color: white;
  &:hover {
    background-color: lightseagreen;
  }
`;

export const StyledLink = styled(Grid)`
  a {
    color: #3f51b5;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
