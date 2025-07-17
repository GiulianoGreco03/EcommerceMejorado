import { useState } from "react";
import { useAppContext } from "../../../context/context";
import { uploadOrder } from "../../../services/firebaseService";
import "./CheckoutForm.css"
import { useForm } from "react-hook-form";

function CheckoutForm() {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const {cart, calculateCartTotal, cleanCart} = useAppContext()
  const [uploaded, setUploaded] = useState(false)
  const [id, setId] = useState("")

  const onSubmit = (data) => {
    const orden = { buyer: data,
     items: cart.map((product)=>{
        return {id:product.id, title:product.title, price:product.price, quantity:product.quantity}
    }),
    total: calculateCartTotal()
    }
    const ordenSubida = uploadOrder(orden)
    setUploaded(true)
    cleanCart()
    ordenSubida.then(orderReference=>setId(orderReference.id))
    
  };

  return (
    uploaded ? 
    <div className="upload-conteiner">
        <label>Tu pedido se subio correctamente. <br /> ID de pedido: {id}</label>
    </div>
    
    :
    <form onSubmit={handleSubmit(onSubmit)} className="formulario-contacto">
      <div className="form-group">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 2,
              message: "Debe tener al menos 2 caracteres",
            },
          })}
        />
        {errors.nombre && <span className="error">{errors.nombre.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Teléfono</label>
        <input
          type="tel"
          {...register("telefono", {
            required: "El teléfono es obligatorio",
            pattern: {
              value: /^[0-9]{7,15}$/,
              message: "Debe ser un número válido (7 a 15 dígitos)",
            },
          })}
        />
        {errors.telefono && <span className="error">{errors.telefono.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ser un email válido",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <button type="submit" className="button-default">Enviar</button>
    </form>
  );
}

export default CheckoutForm;
