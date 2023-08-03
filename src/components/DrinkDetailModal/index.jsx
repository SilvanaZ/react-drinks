import useDrinks from '../../hooks/useDrinks';
import { 
  StyledImage, 
  StyledModal, 
  StyledModalTitle, 
  StyledModalHeader, 
  StyledModalBody, 
  StyledInstructions, 
  StyledIngredients } 
from "./DetailModalStyle";


export default function DrinkDetailModal () {
    const { modal, handleModalClick, recipe, loading } = useDrinks();
    function showIngredients () {
        let ingredients = [];
        for (let index = 1; index < 16; index++) {
            if(recipe[`strIngredient${index}`]) {
                ingredients.push(
                    <li key={index}>
                        {recipe[`strIngredient${index}`]} {recipe[`strMeasure${index}`]}
                    </li>
                )
            } 
        }
        return ingredients;        

    }

    return (
        !loading && (
            <StyledModal show={modal} onHide={handleModalClick} >
              <StyledImage src={recipe.strDrinkThumb} alt={`Imagen receta ${recipe.strDrink}`}
              />
              <StyledModalHeader>
                <StyledModalTitle>{recipe.strDrink}</StyledModalTitle>
              </StyledModalHeader>
              <StyledModalBody>
                <StyledInstructions>
                  <h2>Instrucciones</h2>
                  {recipe.strInstructions}
                  <StyledIngredients>
                  <h2>Ingredientes y Cantidad</h2>
                  {showIngredients()}
                  </StyledIngredients>
                </StyledInstructions>
              </StyledModalBody>
            </StyledModal>
          )
    )
}