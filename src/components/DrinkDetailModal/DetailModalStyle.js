import styled from 'styled-components';
import {
    Modal,
    Image
} from 'react-bootstrap';

export const StyledModal = styled(Modal)`
background-color: transparent;
margin: 0 auto;
`;

export const StyledImage = styled(Image)`
max-width: 100%;
height: auto;
`;

export const StyledModalHeader = styled(Modal.Header)`
background-color: purple;
color: #777;
`;

export const StyledModalTitle = styled(Modal.Title)`
font-size: 24px;
font-weight: bold;
`;

export const StyledModalBody = styled(Modal.Body)`
padding: 15px;
background-color: gray;
color: lightblue;
`;

export const StyledInstructions = styled.div`
h2 {
    font-size: 20px;
    margin-bottom: 10px;
}
`;

export const StyledIngredients = styled.div`
h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

li {
    list-style-type: none;
    margin-bottom: 5px;
}
`;