import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'
import logo from "../NavBar/logo.svg"

const NavBar = () => {
    return (
        <nav className="NavBar contenedor" >
            <Link to='/' className="logoTicketera">
                <img src={logo} alt="logo"></img>
                <h3>ES HORA</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/teatro`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>TEATRO</NavLink>
                <NavLink to={`/category/musica`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>MÚSICA</NavLink>
                <NavLink to={`/category/sociales`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>SOCIALES</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar