import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © to React Drinks by'}
            <Link color="inherit" to="https://github.com/silvanaZ/react-drinks/">
                Silvana Zalazar ✨
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}