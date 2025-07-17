import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

const productsCollection = collection(db, "Productos")
const ordersCollection = collection(db, "Ordenes")

export const getProducts = () => {
    return getDocs(productsCollection)
}

export const getProduct = (id) => {
    return getDoc(doc(db, "Productos", id))
}

export const uploadProduct = async (product) => {
    const docRef = await addDoc(productsCollection, product)
    updateDoc(docRef, { id:docRef.id })
}

export const uploadProductArray = (products)=>{
    products.forEach(element => {
        uploadProduct(element)
    });
}

export const uploadOrder = order => addDoc(ordersCollection, order)
