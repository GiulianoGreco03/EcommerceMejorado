import { useAppContext } from '../../context/context'
import './CartConteiner.css'
import CartItem from './CartItem/CartItem'

import { Link } from 'react-router'

function CartConteiner() {
  const { cart, calculateCartTotal } = useAppContext()

  return (
    <div className="cart-container">
      
      <div className="cart-header">
            <h1 className="cart-title">Carrito de compras</h1>
            <h2>Total: ${calculateCartTotal()}</h2>
            <Link to="/checkout" className="button-default">Ir al Checkout</Link>
        </div>


      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          
        </>
      )}
    </div>
  )
}

export default CartConteiner
