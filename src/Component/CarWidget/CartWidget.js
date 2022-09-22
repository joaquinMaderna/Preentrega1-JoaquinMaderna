import cart from "./assets/cart.svg"
import "./CartWidget.css"
const CartWidget = () =>{
    return(
        <div style={{display:"flex"}}>
           <a href="#">
            3
            <img style={{height:20,width:20}} src={cart} alt="cart"/>
           </a> 
        </div>
    )
}
export default CartWidget