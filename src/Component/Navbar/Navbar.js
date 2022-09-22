import './Navbar.css'
import CartWidget from '../CarWidget/CartWidget'
const Navbar = () => {
    return(
        <nav style={{display:"flex", justifyContent:"space-around" }}>
            <div>
                <h1>Ecommerce</h1>
            </div>
            <div>
                <button>Celulares</button>
                <button>Notebooks</button>
                <button>Tablets</button>
                <button>Computadoras</button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar 