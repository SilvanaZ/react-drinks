import styled from 'styled-components';
import { Typography, Link } from '@mui/material';

export const StyledTypography = styled(Typography)`
  font-size: 30vh;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
