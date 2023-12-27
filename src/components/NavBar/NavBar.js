import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <div>
                <button>Teatro</button>
                <button>Cine</button>
                <button>Sociales</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar

