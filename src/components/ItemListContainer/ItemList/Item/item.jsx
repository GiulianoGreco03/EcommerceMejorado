import  './item.css'
import { Link } from 'react-router'

function Item({id, title, price, img}){
    return (
        <div className='conteiner'>
            <div className='imageConteiner'>
                <img src={img} />
            </div>
            <div className='item-text'>
                <label className='item-title'>{title}</label>
                <label className='item-price'>${price}</label>
                <Link to={`/products/${id}`} className='button-default'>Ver detalle</Link>
            </div>
            
        </div>
    )
}

export default Item