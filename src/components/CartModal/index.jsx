import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import useModal from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";
import Cart from "../Cart";
import { Link, useNavigate } from "react-router-dom";

function CartModal() {
    const { isOpen, toogleModal } = useModal()
    const { cart, clearCart, sendOrder, orderTotal } = useCart();
    const navigate = useNavigate()
const handleNextStep = ()=>{
    navigate("/Cart")
}
    if (isOpen)
        return (
            <div className={styles.modalBg} >
                <div className={styles.modal}>
                    <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={() => toogleModal()} />
                    <h2>Mi carrito</h2>
                    <section className={styles.modalBody}>
                        <div className={styles.modalDrinkListContainer}>
                            {cart.cartItems.length == 0 && (
                                <h3>No hay productos en el carrito</h3>
                            )}
                            {cart.cartItems.map(drink => {
                                return (
                                    <Cart key={drink.idDrink} drink={drink} />
                                )
                            })}
                        </div>
                        <aside>
                            <p>total: $ {orderTotal}</p>
                            <div className={styles.btnContainer}>
                                <button className={styles.clearCart} onClick={clearCart}>Vaciar Carrito</button>
                                <Link to={""} onClick={handleNextStep}>
                                <button className={styles.confirmCart} onClick={sendOrder}>Comprar</button>
                                </Link>
                                
                            </div>
                        </aside>
                    </section>
                </div>
            </div>
        )
}

export default CartModal;