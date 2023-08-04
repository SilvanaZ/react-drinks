
import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart';
import useDrinks from '../../hooks/useDrinks';
import {
    StyledCard,
    DrinkImage,
    DrinkTitle,
    DrinkPrice,
    ButtonWrapper,
    RecipeButton,
    AddToCartButton,
} from './DrinkCardStyles'; // Importamos los estilos desde DrinkCardStyles.js

export default function DrinkCard({ drink }) {
    const { handleDrinkIdClick, handleModalClick } = useDrinks();
    const { addToCart } = useCart();

    function handleAddToCart(drink) {
        addToCart(drink);
    }

    return (
        <Col md={3} ld={3}>
            <StyledCard>
                <DrinkImage
                    variant="top"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                />
                <Card.Body>
                    <DrinkTitle>{drink.strDrink}</DrinkTitle>
                    <DrinkPrice>$ {drink.price.toString()}</DrinkPrice>
                    <ButtonWrapper>
                        <RecipeButton
                            variant="warning"
                            onClick={() => {
                                handleModalClick();
                                handleDrinkIdClick(drink.idDrink);
                            }}
                        >
                            Ver receta
                        </RecipeButton>
                        <AddToCartButton onClick={() => handleAddToCart(drink)}>
                            Agregar al carrito
                        </AddToCartButton>
                    </ButtonWrapper>
                </Card.Body>
            </StyledCard>
        </Col>
    );
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
    }).isRequired,
};