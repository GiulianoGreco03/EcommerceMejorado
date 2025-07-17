import "./NotFoundPage.css"
import { Link } from "react-router";
import { FaExclamationTriangle } from 'react-icons/fa'

function NotFoundPage(){
    return(
        <div className="not-found">
            <FaExclamationTriangle className="icon" />
            <h1>404 - Página no encontrada</h1>
            <p>La página que estás buscando no existe.</p>
            <Link to="/products" className="back-home">Volver al catalogo</Link>
        </div>
    )
}

export default NotFoundPage;