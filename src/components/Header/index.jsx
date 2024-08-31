import {
    HeaderContainer,
    Title,
    ButtonGroup,
    Button,
    Icon,
    WelcomeMessage,
    CartUser
} from './StyledHeader';
import { faCartShopping, faHome, faPen, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { toogleModal } = useModal();
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <HeaderContainer>
            <div>
                <Title>Buscador de bebidas <Icon icon={faHome} onClick={handleHomeClick} /></Title>
            </div>
            <ButtonGroup>
                <Button onClick={handleLoginClick}>
                    Logueate
                    <Icon icon={faRightToBracket} onClick={() => toogleModal()} />
                </Button>
                <h3>ó</h3>
                <Button onClick={handleRegisterClick}>
                    Registrate
                    <Icon icon={faPen} onClick={() => toogleModal()} />
                </Button>
            </ButtonGroup>
            {currentUser && (
                <>
                    <WelcomeMessage>
                        <h2>¡Bienvenid@ {currentUser.name} !</h2>
                    </WelcomeMessage>
                    <CartUser>
                        <Button onClick={logout}>Cerrar sesión</Button>
                        <Icon icon={faCartShopping} onClick={() => toogleModal()} />
                    </CartUser>
                </>
            )}
        </HeaderContainer>
    );
}
