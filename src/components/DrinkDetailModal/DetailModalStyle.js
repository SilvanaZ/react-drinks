import styled from 'styled-components';
import {
    Modal,
    Image
} from 'react-bootstrap';

export const StyledModal = styled(Modal)`
background-color: #f5f5f5;
border-radius: 8px;
max-width: 600px;
margin: 0 auto;
`;

export const StyledImage = styled(Image)`
max-width: 100%;
height: auto;
`;

export const StyledModalHeader = styled(Modal.Header)`
background-color: #007bff;
color: #fff;
`;

export const StyledModalTitle = styled(Modal.Title)`
font-size: 24px;
font-weight: bold;
`;

export const StyledModalBody = styled(Modal.Body)`
  // Estilos para el cuerpo del modal
padding: 15px;
`;

export const StyledInstructions = styled.div `
h2 {
    font-size: 20px;
    margin-bottom: 10px;
}
`;

export const StyledIngredients = styled.div `
h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

li {
    list-style-type: none;
    margin-bottom: 5px;
}
`;