import { useEffect, useState } from 'react';
import './ItemListConteiner.css'

import Loader from '../Loader/loader';
import { useParams, Link } from 'react-router';
import ItemList from './ItemList/ItemList';
import { getProducts } from '../../services/firebaseService';
import FilterSidebar from './FilterSideBar/FilterSideBar';

function ItemListConteiner(){

    const { category } = useParams()
    
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    

    const filterProducts = (arrayProducts, category)=>{
        if(category){
            setProducts(arrayProducts.filter((item)=>item.category === category))
        } else {
            setProducts(arrayProducts)
        }
    }

    useEffect(()=>{
        if(allProducts.length === 0){
            setLoading(true)
            getProducts()
            .then((result)=>{    
                const productos = result.docs.map(el=>el.data())            
                setAllProducts(productos)
                filterProducts(productos, category)
                setLoading(false)
            })
            .catch(()=>alert("Error al cargar productos"))

            
        } else {
            filterProducts(allProducts, category)
        }
    }, [allProducts,category])

    return(
        <>
           <section className='itemConteiner'>
            {loading ? <Loader/>:
                <>
                    <FilterSidebar/>
                    <div className='itemConteinerList'><ItemList  products={products} /></div>
                    
                </>
            }                 
           </section>
                
        </>
    )
}

export default ItemListConteiner;