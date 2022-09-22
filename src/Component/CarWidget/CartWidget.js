import cart from "./assets/cart.svg"

const CartWidget = () =>{
    return(
        <div style={{display:"flex"}}>
            <div>4</div> 
            <img style={{height:20,width:20}} src={cart} alt="cart"/>
        </div>
    )
}
export default CartWidget