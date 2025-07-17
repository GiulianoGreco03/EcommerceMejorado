import { useState } from "react";
import Counter from "../../Counter/Counter";
import "./CartItem.css";
import { useAppContext } from "../../../context/context";

function CartItem({ id, title, price, img, quantity, stock }) {
  const [counter, setCounter] = useState(quantity);
  const { addToCart, deleteItem } = useAppContext();

  return (
    <div className="cart-item">
      <img src={img} alt={title} className="cart-item-img" />

      <div className="cart-item-details">
        <h4 className="cart-item-title">{title}</h4>
        <p className="cart-item-price">
          ${price} x {quantity}
        </p>
      </div>

      <div className="cart-item-controls">
        <Counter stock={stock} counter={counter} setCounter={setCounter} />
        <div className="cart-item-buttons">
          <button
            className="button-default update"
            onClick={() =>
              addToCart({ id, title, price, quantity, stock, img }, counter)
            }
          >
            Actualizar
          </button>
          <button
            className="button-default delete"
            onClick={() => deleteItem(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
