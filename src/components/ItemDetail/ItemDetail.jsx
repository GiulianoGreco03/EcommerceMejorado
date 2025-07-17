import { Navigate, useNavigate, useParams } from "react-router";
import "./ItemDetail.css"
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";
import Counter from "../Counter/Counter";
import { Link } from "react-router";
import { useAppContext } from "../../context/context";
import { getProduct } from "../../services/firebaseService";


function ItemDetail(){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [addPressed, setAddPressed] = useState(false)
    const [producto, setProducto] = useState({});
    const [counter, setCounter] = useState(0)
    const {addToCart} = useAppContext()

    const navigate = useNavigate()


    useEffect(()=>{
        setLoading(true)
        getProduct(id)
        .then((result)=>{
            const product = result.data()
            if(product)
                setProducto(product)
            else
                navigate("/not-found")
            setLoading(false)
        }).catch((err) => { alert(err) })
    },[id])

    return(
            loading ? <Loader className="loader"/> :
            <div className="detailConteiner">
                
                <div className="textImg">
                    <div className="imgConteiner">
                        <img src={producto.img} />
                    </div>
                    <div className="text">
                        <label className="detail-title">{producto.title}</label>
                        
                        <label className="detail-price">${producto.price}</label>

                        {addPressed ? <label >Productos agregados al carrito</label> :
                            <div className="botones">
                                <Counter stock={producto.stock} counter={counter} setCounter={setCounter} />
                                <button className="button-default" onClick={()=>{
                                    addToCart(producto, counter)
                                    if(counter > 0)
                                        setAddPressed(true)
                                    }}>Agregar al carrito</button>
                            </div>
                        }
                    </div>
                </div>
                <p>{producto.text}</p>
                <Link to="/products" className="button-default">Volver</Link>
                
            </div>
        
    )
}

export default ItemDetail;