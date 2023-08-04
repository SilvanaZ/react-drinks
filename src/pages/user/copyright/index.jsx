import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © to '}
            <Link color="inherit" to="https://github.com/silvanaZ/react-drinks/">
                <strong>Silvana Zalazar ✨ </strong>
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}