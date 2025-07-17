import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from '../../../context/context';
import { useState } from 'react';
import { Link } from 'react-router';


function CartWidget() {

  const {cart, calculateCartTotal, calculateCartUnits} = useAppContext()
  const [open, setOpen] = useState(false);


    
  return (
    <>
       <div className="cart-dropdown-container">
      <button
        className="button-default cart"
        onClick={() => setOpen(!open)}
      >
        <FaShoppingCart />
        {calculateCartUnits()}
      </button>

      {open && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <p>Carrito vacío</p>
          ) : (
            <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <strong>{item.title}</strong> - ${item.price} x {item.quantity} |${item.price * item.quantity}|
                </li>
              ))}  
            </ul>
            <label> Total: {calculateCartTotal()}</label>
            <Link to={"/cart"} className='button-default'> Ir al carrito </Link>
            </>
          )}
        </div>
        
      )}
    </div>
      
    </>
  )
}

export default CartWidget