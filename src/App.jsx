import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ContactCard from './components/ContactCard/ContactCard'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { ContextProvider } from './context/context'
import CartConteiner from './components/CartConteiner/CartConteiner'
import CheckoutForm from './components/Forms/CheckoutForm/CheckoutForm'
import Home from './components/Home/Home'

function App() {
  
  return (
    
    <ContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home/>} />
          <Route path="/products" element={<ItemListConteiner/>}  />
          <Route path="/products/:id" element={<ItemDetail/>}    />
          <Route path='/products/category/:category' element={<ItemListConteiner/>} />
          <Route path='/contact' element={<ContactCard/>}  />
          <Route path='/cart' element={<CartConteiner/>} />
          <Route path='/checkout' element={<CheckoutForm/>} />
          <Route path='*' element={<NotFoundPage/>}  />
          
        </Routes>
        
      </BrowserRouter>
    </ContextProvider>  
    
  )
}

export default App
