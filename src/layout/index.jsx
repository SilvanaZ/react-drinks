import { useEffect, useState } from "react";
import styles from "./MainLayout.module.css"; // Importar los estilos personalizados
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { Container, Carousel } from "react-bootstrap";
import CartModal from "../components/CartModal";
import axios from "axios";
import { CarouselContainer } from "../layout/Carrousel";

export default function MainLayout({ children }) {
    const [cocktails, setCocktails] = useState([]);

    // Función para obtener cócteles aleatorios de la API
    const fetchCocktails = async () => {
        try {
            const response = await axios.get(
                "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            );
            setCocktails((prevCocktails) => [...prevCocktails, response.data.drinks[0]]);
        } catch (error) {
            console.error("Error fetching cocktails:", error);
        }
    };

    // Llamar a la API varias veces para obtener cócteles aleatorios
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            fetchCocktails();
        }
    }, []);

    return (
        <div className={styles.main}>
            <Header />
            <br /><br />
            <CarouselContainer> {/* Contenedor con clase CSS */}
                <Carousel className={styles.carousel}>
                    {cocktails.length > 0 ? (
                        cocktails.map((cocktail, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={cocktail.strDrinkThumb}
                                    alt={`Slide ${index + 1}`}
                                    style={{ height: '50rem', objectFit: 'cover' }} // Imagen adaptada al contenedor
                                />
                                <Carousel.Caption>
                                    <h3>{cocktail.strDrink}</h3>
                                    <p>{cocktail.strInstructions}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    ) : (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/400x300"
                                alt="Placeholder slide"
                                style={{ height: '50%', objectFit: 'cover' }}
                            />
                            <Carousel.Caption>
                                <h3>Loading Cocktails...</h3>
                                <p>Please wait while we load the cocktail images.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            </CarouselContainer>
            <Container className="mt-5">{children}</Container>
            <CartModal />
            <br />
            <br />
            <Footer />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
