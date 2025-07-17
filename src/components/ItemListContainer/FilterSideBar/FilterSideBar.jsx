import { Link } from "react-router";
import "./FilterSidebar.css"

function FilterSidebar(){
    return(
        <ul className='itemConteinerSideBar'>
            <Link to="/products" className='navbarLi'>Todos los productos</Link>
            <Link to="/products/category/plantas_de_interior" className='navbarLi'>Plantas de interior</Link>
            <Link to="/products/category/cactus_y_crasas" className='navbarLi'>Cactus y crasas</Link>
        </ul>
    )
}

export default FilterSidebar;