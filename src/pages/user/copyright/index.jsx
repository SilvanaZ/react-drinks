import { StyledTypography,StyledLink } from './StyledCopyright.js'

export default function Copyright(props) {
    return (
        <StyledTypography {...props}>
            {'Copyright © to '}
            <StyledLink to="https://github.com/silvanaZ/react-drinks/">
                <strong>Silvana Zalazar ✨ </strong>
            </StyledLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </StyledTypography>
    );
}