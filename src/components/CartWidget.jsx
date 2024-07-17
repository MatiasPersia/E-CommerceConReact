import { Link } from "react-router-dom";
function CartWidget (){
    return (
        <div className="carrito p-2">
        <Link class="fa fa-shopping-cart carrito" aria-hidden="true" to="/carrito"></Link>
        <p className="numeroCart">0</p>
        </div>
    )
}
export default CartWidget;