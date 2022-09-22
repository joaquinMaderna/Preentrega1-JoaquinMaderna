import './Navbar.css'
import CartWidget from '../CarWidget/CartWidget'
const Navbar = () => {
    return(
        <nav class="navbar">
            <div>
                <h1>Autopartes Norte</h1>
            </div>
            <div>
                <ul>
                    <li><a href="#">Limpieza</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Cubiertas</a></li>
                    <li><a href="#">Repuestos</a></li>
                </ul>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar 