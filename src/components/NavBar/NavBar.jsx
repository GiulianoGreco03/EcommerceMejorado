import CartWidget from './CartWidget/CartWidget'
import logo from '/assets/logo.png'
import './NavBar.css'
import { Link } from 'react-router'
import { useState } from 'react'

function NavBar() {

  const [open, setOpen] = useState(false)
  
  return (
    <nav className='navbar'>
        <img src={logo} className='logo'></img>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>☰</button>
         <ul className={`nav-links ${open ? 'show' : ''}`}>
           <Link to="/home" className='navbarLi'>Inicio</Link>
            <Link to="/products" className='navbarLi'>Catalogo</Link>
            <Link to="/contact" className='navbarLi'>Contacto</Link>
        </ul>
        <CartWidget></CartWidget>

    </nav>
  )
}

export default NavBar