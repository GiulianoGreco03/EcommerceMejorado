import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

export const ContextProvider = (props) => {


    const [cart, setCart] = useState([]);

    const addToCart = (newProduct, quantity) => {
        if (quantity <= 0) return;
        if(cart.some((product)=>product.id === newProduct.id)){
            const newCart = cart.map((product)=>{
                if(product.id === newProduct.id) {
                    if( quantity <= newProduct.stock)
                        return {id:newProduct.id, title:newProduct.title, price:newProduct.price, quantity: quantity, stock: newProduct.stock, img: newProduct.img} 
                    else
                        return {id:newProduct.id, title:newProduct.title, price:newProduct.price, quantity: newProduct.stock, stock: newProduct.stock, img: newProduct.img} 
                } else {
                    return product
                }             
            })
            setCart(newCart)
        } else{
          setCart([...cart, {id:newProduct.id, title:newProduct.title, price:newProduct.price, quantity:quantity, stock: newProduct.stock, img: newProduct.img}])  
        }
        
    }

    const deleteItem = (deleteId) => {
        const newCart = cart.filter(product => product.id !== deleteId)
        setCart(newCart)
    }
    

    const calculateCartTotal = () =>{
        return cart.reduce((total, product)=>total + product.price * product.quantity, 0)
    }

    const calculateCartUnits= () =>{
        return cart.reduce((units, product)=>units+product.quantity, 0)
    }

    const cleanCart = ()=>setCart([])

    return(
        <AppContext.Provider value={{cart, addToCart, calculateCartTotal, calculateCartUnits, deleteItem, cleanCart}}>
            {props.children}
        </AppContext.Provider>
    )
}