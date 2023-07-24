import Copyright from "../../pages/user/copyright";
import styles from "./Footer.module.css";

export default function Footer () {
    return (
        <footer className={`py-5 ${styles.footer}`}>
            <Copyright/>
        </footer>
        
    )
}