import './ItemList.css'
import Item from './Item/item';

function ItemList({products}){
    return(
        products.length > 0 ?
                    products.map((item)=>
                        <Item key={item.id} {...item} />
                    )
                    :
                    <label> Productos no encontrados</label>
    )
}

export default ItemList;